import { DialogTitle } from "@radix-ui/react-dialog";
import { Title } from "@/styles/global";
import { EditPostModalForm } from "./styles";
import { Modal } from "@/components/Modal";
import { FormField } from "@/components/FormField";

interface EditPostModalProps {
  defaultPostContentValue: string
  isOpen: boolean
  handleToggleOpen: (open: boolean) => void
}

export function EditPostModal({ defaultPostContentValue, isOpen, handleToggleOpen }: EditPostModalProps) {
  function handleEditPost() {

  }

  return isOpen && (
    <Modal isOpen={ isOpen } onToggleOpen={ handleToggleOpen }>
      <DialogTitle asChild>
        <Title $level={2} $size="sm">Edit Post</Title>
      </DialogTitle>

      <EditPostModalForm>
        <FormField
          name="edited_post_content"
          type="textarea"
          placeholder="Edit the post content..."
          defaultValue={defaultPostContentValue}
        />

        <button type="submit">Submit Edit</button>
      </EditPostModalForm>
    </Modal>
  )
}