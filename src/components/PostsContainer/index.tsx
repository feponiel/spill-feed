"use client"

import { Post } from "@/components/Post"
import { useState } from "react"
import { CreatePostButton, NoPostsMessage, StyledPostsContainer } from "./styles"
import { PlusIcon } from "@phosphor-icons/react"
import { CreatePostModal } from "@/components/CreatePostModal"
import { Title } from "@/styles/global"

export function PostsContainer() {
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false)

  let posts = [
    {
      author: { name: "Felipe Elias", synthesis: "Java Developer", avatar_url: "https://github.com/feponiel.png" },
      content: "Lorem ipsum dolor",
      likes: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      author: { name: "João Victor", synthesis: "Linux Specialist", avatar_url: "https://github.com/jhonnzz.png" },
      content: "Sit amet consectetur adipiscing elit.",
      likes: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  // posts = [] // simulating no posts

  return (
    <StyledPostsContainer>
      <header>
        <Title $level={2} $size="md">Posts related to #java</Title>
        <p>See what people is talking about #java</p>
      </header>

      <main>
        {
          posts.length > 0 ? (
            posts.map(post => (
              <Post
                author={ {name: post.author.name, synthesis: post.author.synthesis, avatar_url: post.author.avatar_url} }
                content={ post.content }
                likesAmount={ post.likes }
                publishedAt={ post.createdAt }
                updatedAt={ post.updatedAt }
              />
            ))
          ) : (
            <NoPostsMessage>There are no posts here yet :(</NoPostsMessage>
          )
        }
      </main>

      <CreatePostButton onClick={ () => setCreatePostModalOpen(true) } title="Create new post">
        <PlusIcon />
      </CreatePostButton>

      <CreatePostModal isOpen={ isCreatePostModalOpen } handleToggleOpen={ setCreatePostModalOpen } />
    </StyledPostsContainer>
  )
}
