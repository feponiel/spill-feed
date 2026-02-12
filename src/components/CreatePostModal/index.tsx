import { DialogTitle } from "@radix-ui/react-dialog";
import { Modal } from "../Modal";
import { Title } from "@/styles/global";
import { FormField } from "../FormField";
import { CreatePostModalForm } from "./styles";

interface CreatePostModalProps {
  isOpen: boolean
  handleToggleOpen: (open: boolean) => void
}

export function CreatePostModal({ isOpen, handleToggleOpen }: CreatePostModalProps) {
  function handleCreatePost() {

  }

  return (
    <Modal isOpen={ isOpen } onToggleOpen={ handleToggleOpen }>
      <DialogTitle asChild>
        <Title $level={2} $size="sm">Create New Post</Title>
      </DialogTitle>

      <CreatePostModalForm>
        <FormField
          name="post_content"
          type="textarea"
          placeholder="Write down the post content..."
        />

        <button type="submit">Create Post</button>
      </CreatePostModalForm>
    </Modal>
  )
}