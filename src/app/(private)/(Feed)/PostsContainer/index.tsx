"use client"

import { Post } from "@/components/Post"
import { useState } from "react"
import { CreatePostButton } from "./styles"
import { PlusIcon } from "@phosphor-icons/react"
import { CreatePostModal } from "@/components/CreatePostModal"

export function PostsContainer() {
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false)

  return (
    <>
      <main>
        <Post
          author={ {name: "Felipe Elias", synthesis: "Java Developer", avatar_url: "https://github.com/feponiel.png"} }
          content="Lorem Ipsum Dolor"
          publishedAt={new Date()}
          updatedAt={new Date()}
        />
      </main>

      <CreatePostButton onClick={ () => setCreatePostModalOpen(true) } title="Create new post">
        <PlusIcon size={ 24 } />
      </CreatePostButton>

      <CreatePostModal isOpen={ isCreatePostModalOpen } handleToggleOpen={ setCreatePostModalOpen } />
    </>
  )
}
