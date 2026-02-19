import { ActionConfirmModal } from "@/components/ActionConfirmModal";

interface DeletePostModalProps {
  isOpen: boolean
  handleToggleModal: (open: boolean) => void
}

export function DeletePostModal({ isOpen, handleToggleModal }: DeletePostModalProps) {
  function handleDeletePost() {

  }

  return (
    <ActionConfirmModal
      title="Delete Post"
      description="Are you sure you want to delete this post? This action is totally irreversible and you will not be able to undo it."
      confirmationText="Delete"
      isOpen={ isOpen }
      handleToggleModal={ handleToggleModal }
      handleConfirm={ handleDeletePost }
    />
  )
}
