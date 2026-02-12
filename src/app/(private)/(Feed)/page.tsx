import { SideBar } from "@/components/SideBar";
import { Container } from "./styles";
import { Metadata } from "next";
import { PostsContainer } from "./PostsContainer";

export const metadata: Metadata = {
  title: "Feed"
}

export default function Feed() {
  return (
    <Container>
      <SideBar />

      <PostsContainer />
    </Container>
  )
}
