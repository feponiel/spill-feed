"use client"

import { formatDate } from "@/utils/formatDate"
import { Avatar } from "../Avatar"
import { Info, Content, PostDate, InfoDisplay, StyledPost, EditionWarn, PostOptionsMenuButton } from "./styles"
import { useState } from "react"
import { ClockIcon, DotsThreeIcon, PencilIcon } from "@phosphor-icons/react"
import { DeletePostModal } from "./DeletePostModal"
import { PostOptionsMenu } from "./PostOptionsMenu"
import { EditPostModal } from "./EditPostModal"
import * as Collapsible from "@radix-ui/react-collapsible"
import { EngagementPanel } from "./EngagementPanel"
import { CommentSection } from "./CommentsSection"
import { ContentWrapper } from "./ContentWrapper"

interface Author {
  name: string
  synthesis?: string
  avatar_url?: string
}

interface PostProps {
  author: Author
  content: string
  likesAmount: number
  publishedAt: Date
  updatedAt: Date
}

export function Post({ author, content, likesAmount, publishedAt, updatedAt }: PostProps) {
  const [postLikesAmount, setPostLikesAmount] = useState(likesAmount)
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false)
  const [isPostLiked, setPostLiked] = useState(false) // it'll come from a table in the db that makes the relation between the user id and the post id (Post Likes)
  const [isPostOptionsMenuOpen, setPostOptionsMenuOpen] = useState(false)
  const [isEditPostModalOpen, setEditPostModalOpen] = useState(false)
  const [isDeletePostModalOpen, setDeletePostModalOpen] = useState(false)

  const isEdited = false //updatedAt > publishedAt

  const {
    formatedDate: postDateFormated,
    formatedDateRelativeToNow: postDateRelativeToNow 
  } = formatDate(publishedAt)

  function handleDeletePost() {
    setDeletePostModalOpen(false)
  }

  function handleLikePost() {
    if (isPostLiked) {
      setPostLikesAmount(prev => prev - 1)
      setPostLiked(false)
    } else {
      setPostLikesAmount(prev => prev + 1)
      setPostLiked(true)
    }
  }

  return (
    <StyledPost>
      <header>
        <InfoDisplay>
          <Avatar username={ author.name } url={ author.avatar_url } />
          
          <Info>
            <strong>{ author.name }</strong>
            { author.synthesis &&
              <span>{ author.synthesis }</span>
            }
            <PostDate title={ postDateFormated } dateTime={ publishedAt.toISOString() }>
              <ClockIcon size={16} />

              { postDateRelativeToNow }
            </PostDate>
          </Info>
        </InfoDisplay>

        <PostOptionsMenu
          trigger={
            <PostOptionsMenuButton title="Post options">
              <DotsThreeIcon size={24} />
            </PostOptionsMenuButton>
          }
          isOpen={ isPostOptionsMenuOpen }
          handleToggleMenu={ setPostOptionsMenuOpen }
          handleChooseEditOption={ () => setEditPostModalOpen(true) }
          handleChooseDeleteOption={ () => setDeletePostModalOpen(true) }
        />
      </header>

      <Content>
        {isEdited && (
          <EditionWarn>
            <PencilIcon size={16} />
            Edited by the author
          </EditionWarn>
        )}
        
        <ContentWrapper>{ content }</ContentWrapper>
      </Content>

      <Collapsible.Root open={ isCommentSectionOpen } onOpenChange={ setCommentSectionOpen }>
        <EngagementPanel isPostLiked={ isPostLiked } likesAmount={ postLikesAmount } onLikePost={ handleLikePost } />

        <CommentSection />
      </Collapsible.Root>

      <EditPostModal defaultPostContentValue={ content } isOpen={ isEditPostModalOpen } handleToggleOpen={ setEditPostModalOpen } />
      <DeletePostModal isOpen={ isDeletePostModalOpen } handleToggleModal={ () => setDeletePostModalOpen(false) } />
    </StyledPost>
  )
}
