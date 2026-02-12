import { Title } from "@/styles/global"
import { DialogTitle } from "@radix-ui/react-dialog"
import { CancelDeletionButton, ConfirmDeletionButton, DeletionMessage, DeletionModalFooter } from "./styles"
import { Modal } from "@/components/Modal"

interface DeletionModalProps {
  title: string
  description: string
  isOpen: boolean
  handleToggleModal: (open: boolean) => void
  handleConfirmDeletion: () => void
}

export function DeletionModal({ title, description, isOpen, handleToggleModal, handleConfirmDeletion }: DeletionModalProps) {
  return (
    <Modal isOpen={ isOpen } onToggleOpen={ handleToggleModal }>
      <DialogTitle asChild>
        <Title $level={2} $size="sm">{ title }</Title>
      </DialogTitle>

      <DeletionMessage>{ description }</DeletionMessage>

      <DeletionModalFooter>
        <CancelDeletionButton>Cancel</CancelDeletionButton>
        <ConfirmDeletionButton onClick={ handleConfirmDeletion }>Delete</ConfirmDeletionButton>
      </DeletionModalFooter>
    </Modal>
  )
}
