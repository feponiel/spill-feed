import { FormField } from "@/components/FormField";
import { Modal } from "@/components/Modal";
import { AuthUser } from "@/hooks/useAuthUser";
import { EditProfileModalForm } from "./styles";
import { Title } from "@/styles/global";
import { DialogTitle } from "@radix-ui/react-dialog";

interface EditProfileModalProps {
  userInfo: AuthUser
  isOpen: boolean
  handleToggleModal: (open: boolean) => void
}

export function EditProfileModal({ userInfo, isOpen, handleToggleModal }: EditProfileModalProps) {
  const closeModal = () => handleToggleModal(false)

  function handleEditProfile() {
    closeModal()
  }

  return (
    <Modal isOpen={ isOpen } onToggleOpen={ handleToggleModal } >
      <DialogTitle asChild>
        <Title $level={2} $size="sm">Edit Profile</Title>
      </DialogTitle>

      <EditProfileModalForm onSubmit={ handleEditProfile }>
        <FormField
          name="name"
          defaultValue={ userInfo.name }
          label="Name"
          isDisabled
          disabledMessage="This field was synced with your GitHub and can’t be edited"
        />

        <FormField
          name="avatar_url"
          defaultValue={ userInfo.avatar_url }
          label="Profile Picture"
          isDisabled
          disabledMessage="This field was synced with your GitHub and can’t be edited"
        />

        <FormField
          name="synthesis"
          placeholder='Your denomination (e.g., Java Developer)...'
          defaultValue={ userInfo.synthesis ?? "" }
          label="Synthesis"
          hasValidationError={ true }
          validationErrorMessage="Synthesis must be between 8-30 characters."
        />

        <FormField
          name="banner_url"
          placeholder="URL of your banner picture..."
          defaultValue={ userInfo.banner_url ?? "" }
          label="Banner picture"
        />

        <button type="submit">Submit Edit</button>
      </EditProfileModalForm>
    </Modal>
  )
}