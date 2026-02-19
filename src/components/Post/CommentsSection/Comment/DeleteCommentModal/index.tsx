import { ActionConfirmModal } from "@/components/ActionConfirmModal";

interface DeleteCommentModalProps {
  isOpen: boolean
  handleToggleModal: (open: boolean) => void
}

export function DeleteCommentModal({ isOpen, handleToggleModal }: DeleteCommentModalProps) {
  function handleDeleteComment() {

  }

  return (
    <ActionConfirmModal
      title="Delete Comment"
      description="Are you sure you want to delete this comment? This action is totally irreversible and you will not be able to undo it."
      confirmationText="Delete"
      isOpen={ isOpen }
      handleToggleModal={ handleToggleModal }
      handleConfirm={ handleDeleteComment }
    />
  )
}
