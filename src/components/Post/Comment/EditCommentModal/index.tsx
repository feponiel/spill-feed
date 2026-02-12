import { DialogTitle } from "@radix-ui/react-dialog";
import { Title } from "@/styles/global";
import { EditCommentModalForm } from "./styles";
import { Modal } from "@/components/Modal";
import { FormField } from "@/components/FormField";

interface EditCommentModalProps {
  defaultCommentContentValue: string
  isOpen: boolean
  handleToggleOpen: (open: boolean) => void
}

export function EditCommentModal({ defaultCommentContentValue, isOpen, handleToggleOpen }: EditCommentModalProps) {
  function handleEditComment() {

  }

  return isOpen && (
    <Modal isOpen={ isOpen } onToggleOpen={ handleToggleOpen }>
      <DialogTitle asChild>
        <Title $level={2} $size="sm">Edit Comment</Title>
      </DialogTitle>

      <EditCommentModalForm>
        <FormField
          name="edited_Comment_content"
          type="textarea"
          placeholder="Edit the Comment content..."
          defaultValue={defaultCommentContentValue}
        />

        <button type="submit">Submit Edit</button>
      </EditCommentModalForm>
    </Modal>
  )
}