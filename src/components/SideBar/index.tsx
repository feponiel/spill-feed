"use client"

import { PencilIcon } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";
import { Banner, EditProfileButton, ProfileDisplay, StyledSideBar } from "./styles";
import { useAuthUser } from "@/hooks/useAuthUser";
import { LoadingWheel } from "../LoadingWheel";
import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react";
import Image from "next/image";
import { EditProfileModal } from "./EditProfileModal";

export function SideBar() {
  const { data: authUser, isLoading } = useAuthUser()
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false)

  if (isLoading || !authUser) {
    return (
      <StyledSideBar className="loading">
        <LoadingWheel size="md" />
      </StyledSideBar>
    )
  }

  return (
    <StyledSideBar>
      <header>
        <Banner>
          { authUser.banner_url && <Image src={ authUser.banner_url } alt={`${ authUser.name }'s banner image`} /> }
        </Banner>
      </header>

      <ProfileDisplay>
        <Avatar username={ authUser.name } url={ authUser.avatar_url ?? undefined } />
        <strong>{ authUser.name }</strong>
        <span>{ authUser.synthesis }</span>
      </ProfileDisplay>

      <footer>
        <Dialog.Root open={ isEditProfileModalOpen } onOpenChange={ setEditProfileModalOpen }>
          <EditProfileButton>
            <PencilIcon size={20} />
            Edit Profile
          </EditProfileButton>

          <EditProfileModal userInfo={ authUser } isOpen={ isEditProfileModalOpen } handleToggleModal={ setEditProfileModalOpen } />
        </Dialog.Root>
      </footer>
    </StyledSideBar>
  )
}