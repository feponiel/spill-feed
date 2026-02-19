import { DropdownMenu } from "@/components/DropdownMenu";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import * as Dropdown from "@radix-ui/react-dropdown-menu"
import { ReactElement } from "react";

interface PostOptionsMenuProps {
  trigger: ReactElement
  isOpen: boolean
  handleToggleMenu: (open: boolean) => void
  handleChooseEditOption: () => void
  handleChooseDeleteOption: () => void
}

export function PostOptionsMenu({ trigger, isOpen, handleToggleMenu, handleChooseEditOption, handleChooseDeleteOption }: PostOptionsMenuProps) {
  return (
    <DropdownMenu trigger={ trigger } isOpen={ isOpen } onToggleOpen={ handleToggleMenu }>
      <Dropdown.Item onClick={ handleChooseEditOption }>
        <PencilIcon />
        Edit Post
      </Dropdown.Item>

      <Dropdown.Item onClick={ handleChooseDeleteOption }>
        <TrashIcon />
        Delete Post
      </Dropdown.Item>
    </DropdownMenu>
  )
}
