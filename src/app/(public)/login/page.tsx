"use client"

import { signIn } from 'next-auth/react'
import { Logo } from "@/components/Logo";
import { GithubAuthButton, ImportantLink, ImportantLinksWrapper, LoginPageContainer } from "./styles";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login"
}

export default function Login() {
  function handleSignIn(provider: string) {
    signIn(provider, {
      callbackUrl: "/"
    })
  }

  return (
    <LoginPageContainer>
      <Logo size="lg" />
      <p>Share what you are building anew<br />with people.</p>

      <GithubAuthButton onClick={ () => handleSignIn("github") }>
        <GithubLogoIcon size={24} weight="duotone" />
        Continue with GitHub
      </GithubAuthButton>

      <ImportantLinksWrapper>
        <ImportantLink href="https://github.com/feponiel/spill-feed" target="_blank">Source Code</ImportantLink>
        <ImportantLink href="https://www.linkedin.com/in/feponiel" target="_blank">Dev's LinkedIn Profile</ImportantLink>
      </ImportantLinksWrapper>
    </LoginPageContainer>
  )
}
