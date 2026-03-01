"use client"

import { Post } from "@/components/Post"
import { useEffect, useState } from "react"
import { CreatePostButton, NoPostsMessage, StyledPostsContainer } from "./styles"
import { PlusIcon } from "@phosphor-icons/react"
import { CreatePostModal } from "@/components/CreatePostModal"
import { Title } from "@/styles/global"
import { Post as PostType } from "@prisma/client"
import { api } from "@/lib/axios"
import { useAuthUser } from "@/hooks/useAuthUser"
import { LoadingWheel } from "../LoadingWheel"

type PostWithEssentialInfo = PostType & {
  comments_amount: number
  likes_amount: number
  is_liked: boolean

  author: {
    name: string
    synthesis: string
    avatar_url: string
  }
}

export function PostsContainer() {
  const { data: authUser, isLoading } = useAuthUser()
  const [posts, setPosts] = useState<PostWithEssentialInfo[]>([])
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get<PostWithEssentialInfo[]>("/posts")

        setPosts(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts()
  }, [])

  function handleDeletePost(postId: string) {
    setPosts(prev => prev.filter(post => post.id !== postId))
  }

  if (isLoading || !authUser) {
    return (
      <StyledPostsContainer className="loading">
        <LoadingWheel size="lg" />
      </StyledPostsContainer>
    )
  }

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
                id={ post.id }
                author={ {name: post.author.name, synthesis: post.author.synthesis, avatar_url: post.author.avatar_url} }
                content={ post.content }
                likesAmount={ post.likes_amount }
                commentsAmount={ post.comments_amount }
                publishedAt={ new Date(post.created_at) }
                updatedAt={ new Date(post.updated_at) }
                isLiked={ post.is_liked }
                amITheAuthor={ authUser.id === post.author_id }
                handleDelete={ () => handleDeletePost(post.id) }
                key={ post.id }
              />
            ))
          ) : (
            <NoPostsMessage>There are no posts here :(</NoPostsMessage>
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
