import { Container } from "./styles";
import { Metadata } from "next";
import { PostsContainer } from "../../../components/PostsContainer";
import { Sidebar } from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Feed"
}

export default function Feed() {
  return (
    <Container>
      <Sidebar />

      <PostsContainer />
    </Container>
  )
}
