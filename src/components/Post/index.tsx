"use client"

import { formatDate } from "@/utils/formatDate"
import { Avatar } from "../Avatar"
import { Info, CommentForm, CommentList, Content, PostDate, InfoDisplay, StyledPost, SubmitCommentButton, EditionWarn, PostOptionsMenuButton } from "./styles"
import { ChangeEvent, InvalidEvent, SubmitEvent, useState } from "react"
import { ClockIcon, DotsThreeIcon, PencilIcon } from "@phosphor-icons/react"
import { DeletePostModal } from "./DeletePostModal"
import { PostOptionsMenu } from "./PostOptionsMenu"
import { Comment } from "./Comment"
import { EditPostModal } from "./EditPostModal"

interface Author {
  name: string
  synthesis?: string
  avatar_url?: string
}

interface PostProps {
  author: Author
  content: string
  publishedAt: Date
  updatedAt: Date
}

export function Post({ author, content, publishedAt, updatedAt }: PostProps) {
  const [ newCommentContent, setNewCommentContent ] = useState("")
  const [isPostOptionsMenuOpen, setPostOptionsMenuOpen] = useState(false)
  const [isEditPostModalOpen, setEditPostModalOpen] = useState(false)
  const [isDeletePostModalOpen, setDeletePostModalOpen] = useState(false)

  const isNewCommentContentEmpty = newCommentContent.length < 1

  const isEdited = true //updatedAt > publishedAt

  const {
    formatedDate: postDateFormated,
    formatedDateRelativeToNow: postDateRelativeToNow 
  } = formatDate(publishedAt)

  function handleDeletePost() {
    setDeletePostModalOpen(false)
  }

  function handleChangeCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")

    setNewCommentContent(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity("This field is required!")
  }

  function handleCreateNewComment(event: SubmitEvent) {
    event.preventDefault()

    setNewCommentContent("")
  }

  function handleDeleteComment() {
    
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
        { content }
      </Content>

      <CommentForm onSubmit={ (e) => handleCreateNewComment(e) }>
        <label>
          <span>Leave your comment</span>

          <textarea
            placeholder="Write something cool..."
            name="newCommentContent"
            value={ newCommentContent }
            onChange={ handleChangeCommentText }
            onInvalid={ handleNewCommentInvalid }
            required
          />
        </label>

        <footer>
          <SubmitCommentButton type="submit" disabled={ isNewCommentContentEmpty }>Submit</SubmitCommentButton>
        </footer>
      </CommentForm>

      <CommentList>
        <Comment
          id="1"
          author={ { id: "1", name: "Paulo Archanjo", email: "paulo@archanjo.com", synthesis: "Data Analyst", created_at: new Date(), avatar_url: "https://github.com/pauloarchanjo.png", updated_at: new Date(), banner_url: "https://github.com/diego3g.png"  } }
          content="Not really."
          createdAt={new Date()}
          updatedAt={new Date()}
          applaudAmount={12}
          onApplaud={ () => console.log("Applauded!") }
        />
      </CommentList>

      <EditPostModal defaultPostContentValue={ content } isOpen={ isEditPostModalOpen } handleToggleOpen={ setEditPostModalOpen } />
      <DeletePostModal isOpen={ isDeletePostModalOpen } handleToggleModal={ () => setDeletePostModalOpen(false) } />
    </StyledPost>
  )
}
