import { ActionConfirmModal } from "@/components/ActionConfirmModal"

interface DeleteAccountModalProps {
  isOpen: boolean
  handleToggleModal: (open: boolean) => void
}

export function DeleteAccountModal({ isOpen, handleToggleModal }: DeleteAccountModalProps) {
  function handleDeleteAccount() {

  }

  return (
    <ActionConfirmModal
      title="Delete Account"
      description="Are you sure you want to delete your account? This action is totally irreversible and you will not be able to undo it."
      confirmationText="Delete"
      isOpen={ isOpen }
      handleToggleModal={ handleToggleModal }
      handleConfirm={ handleDeleteAccount }
    />
  )
}
