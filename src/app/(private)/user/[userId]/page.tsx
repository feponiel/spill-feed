import { SideBar } from "@/components/SideBar/ProfileCard";
import { Metadata } from "next";
import { Banner, Container, UserProfileDisplay, UserProfileInfo, UserProfilePresentation, UserShowcase } from "./styles";
import { PostsContainer } from "@/components/PostsContainer";
import { Avatar } from "@/components/Avatar";

export const metadata: Metadata = {
  title: "Feed"
}

export default function UserProfile({
  params: { userId },
}: {
  params: { userId: string };
}) {

  return (
    <Container>
      <SideBar />

      <UserShowcase>
        <UserProfileInfo>
          <header>
            <Banner>
              { /* user.banner_url && <Image src={ user.banner_url } alt={`${ user.name }'s banner image`} /> */ }
            </Banner>
          </header>
          
          <UserProfileDisplay>
            <Avatar username="Felipe Elias" url="https://github.com/feponiel.png" />

            <UserProfilePresentation>
              <strong>Felipe Elias</strong>
              <span>Java Developer</span>
            </UserProfilePresentation>
          </UserProfileDisplay>
        </UserProfileInfo>

        <PostsContainer />
      </UserShowcase>
    </Container>
  )
}
