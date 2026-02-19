"use client"

import { GearSixIcon, PencilIcon, SignOutIcon } from "@phosphor-icons/react";
import { Avatar } from "../../Avatar";
import { Banner, EditProfileButton, ProfileDisplay, ProfilePresentation, ProfileSummary, SettingsMenuButton, SignOutButton, StyledProfileCard } from "./styles";
import { useAuthUser } from "@/hooks/useAuthUser";
import { LoadingWheel } from "../../LoadingWheel";
import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react";
import Image from "next/image";
import { EditProfileModal } from "./EditProfileModal";
import { SettingsMenu } from "./SettingsMenu";
import { DeleteAccountModal } from "./DeleteAccountModal";
import { SignOutModal } from "./SignOutModal";
import { useTheme } from "@/hooks/useTheme";

export function ProfileCard() {
  const { data: authUser, isLoading } = useAuthUser()
  const { toggleTheme } = useTheme()
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false)
  const [isSignOutModalOpen, setSignOutModalOpen] = useState(false)
  const [isDeleteAccountModalOpen, setDeleteAccountModalOpen] = useState(false)
  const [isSettingsMenuOpen, setSettingsMenuOpen] = useState(false)

  if (isLoading || !authUser) {
    return (
      <StyledProfileCard className="loading">
        <LoadingWheel size="md" />
      </StyledProfileCard>
    )
  }

  return (
    <StyledProfileCard>
      <header>
        <Banner>
          { authUser.banner_url && <Image src={ authUser.banner_url } alt={`${ authUser.name }'s banner image`} /> }
        </Banner>
      </header>

      <ProfileDisplay>
        <Avatar username={ authUser.name } url={ authUser.avatar_url ?? undefined } />
        
        <ProfileSummary>
          <ProfilePresentation>
            <strong>{ authUser.name }</strong>
            <span>{ authUser.synthesis }</span>
          </ProfilePresentation>

          <Dialog.Root open={ isEditProfileModalOpen } onOpenChange={ setEditProfileModalOpen }>
            <EditProfileButton title="Edit profile">
              <PencilIcon />
            </EditProfileButton>
          </Dialog.Root>
        </ProfileSummary>
      </ProfileDisplay>

      <footer>
        <Dialog.Root open={ isSignOutModalOpen } onOpenChange={ setSignOutModalOpen }>
          <SignOutButton>
            <SignOutIcon />
            Sign out
          </SignOutButton>
        </Dialog.Root>

        <SettingsMenu
          trigger={
            <SettingsMenuButton title="Settings">
              <GearSixIcon />
            </SettingsMenuButton>
          }
          isOpen={ isSettingsMenuOpen }
          handleToggleMenu={ setSettingsMenuOpen }
          handleChooseSwitchTheme={ () => toggleTheme() }
          handleChooseDeleteAccount={ () => setDeleteAccountModalOpen(true) }
        />
      </footer>

      <EditProfileModal userInfo={ authUser } isOpen={ isEditProfileModalOpen } handleToggleModal={ setEditProfileModalOpen } />
      <SignOutModal isOpen={ isSignOutModalOpen } handleToggleModal={ setSignOutModalOpen } />
      <DeleteAccountModal isOpen={ isDeleteAccountModalOpen } handleToggleModal={ setDeleteAccountModalOpen } />
    </StyledProfileCard>
  )
}