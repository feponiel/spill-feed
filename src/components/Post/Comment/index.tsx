import { ClockIcon, DotsThreeIcon, PencilIcon } from '@phosphor-icons/react'
import { User } from "@prisma/client"
import { CommentAuthorAndTime, CommentContent, CommentOptionsMenuButton, CommentWrapper, EditionWarn, StyledComment } from "./styles"
import { Avatar } from "../../Avatar"
import unknownUser from "@/../public/unknown-user.png"
import { ApplaudButton } from '../../ApplaudButton'
import { formatDate } from '@/utils/formatDate'
import { CommentOptionsMenu } from './CommentOptionsMenu'
import { useState } from 'react'
import { DeleteCommentModal } from './DeleteCommentModal'
import { EditCommentModal } from './EditCommentModal'

interface CommentProps {
  id: string
  author: User
  content: string
  createdAt: Date
  updatedAt: Date
  applaudAmount: number
  onApplaud: (id: string) => void
}

export function Comment({ id, author, content, createdAt, updatedAt, applaudAmount, onApplaud }: CommentProps) {
  const [isCommentOptionsMenuOpen, setCommentOptionsMenuOpen] = useState(false)
  const [isEditCommentModalOpen, setEditCommentModalOpen] = useState(false)
  const [isDeleteCommentModalOpen, setDeleteCommentModalOpen] = useState(false)

  const {
    formatedDate: creationDateFormated,
    formatedDateRelativeToNow: creationDateRelativeToNow 
  } = formatDate(createdAt)

  const isEdited = true //updatedAt > publishedAt

  const handleApplaudComment = () => onApplaud(id)

  return (
    <StyledComment>
      <Avatar username={ author.name } url={ author.avatar_url ?? unknownUser.src } hasBorder={false} />

      <CommentWrapper>
        <CommentContent>
          <header>
            <CommentAuthorAndTime>
              <strong>{ author.name }</strong>
              <span>{ author.synthesis }</span>
              <time title={creationDateFormated} dateTime={createdAt.toISOString()}>
                <ClockIcon size={ 15 } />
                { creationDateRelativeToNow }
              </time>
            </CommentAuthorAndTime>

            <CommentOptionsMenu
              trigger={
                <CommentOptionsMenuButton title="Comment options">
                  <DotsThreeIcon size={24} />
                </CommentOptionsMenuButton>
              }
              isOpen={ isCommentOptionsMenuOpen }
              handleToggleMenu={ setCommentOptionsMenuOpen }
              handleChooseEditOption={ () => setEditCommentModalOpen(true) }
              handleChooseDeleteOption={ () => setDeleteCommentModalOpen(true) }
            />
          </header>

          <p>
            {isEdited && (
              <EditionWarn>
                <PencilIcon size={16} />
                Edited
              </EditionWarn>
            )}
            { content }
          </p>
        </CommentContent>

        <footer>
          <ApplaudButton currentAmount={ applaudAmount } onApplaudEvent={ handleApplaudComment } />
        </footer>
      </CommentWrapper>

      <EditCommentModal defaultCommentContentValue={ content } isOpen={ isEditCommentModalOpen } handleToggleOpen={ setEditCommentModalOpen } />
      <DeleteCommentModal isOpen={ isDeleteCommentModalOpen } handleToggleModal={ setDeleteCommentModalOpen } />
    </StyledComment>
  )
}
