import { DropdownMenu } from "@/components/DropdownMenu";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import * as Dropdown from "@radix-ui/react-dropdown-menu"
import { ReactElement } from "react";

interface CommentOptionsMenuProps {
  trigger: ReactElement
  isOpen: boolean
  handleToggleMenu: (open: boolean) => void
  handleChooseEditOption: () => void
  handleChooseDeleteOption: () => void
}

export function CommentOptionsMenu({ trigger, isOpen, handleToggleMenu, handleChooseEditOption, handleChooseDeleteOption }: CommentOptionsMenuProps) {
  return (
    <DropdownMenu trigger={ trigger } isOpen={ isOpen } onToggleOpen={ handleToggleMenu }>
      <Dropdown.Item onClick={ handleChooseEditOption }>
        <PencilIcon size={20} />
        Edit Comment
      </Dropdown.Item>

      <Dropdown.Item onClick={ handleChooseDeleteOption }>
        <TrashIcon size={20} />
        Delete Comment
      </Dropdown.Item>
    </DropdownMenu>
  )
}
