"use client"

import { Post } from "@/components/Post"
import { useState } from "react"
import { CreatePostButton, NoPostsMessage, StyledPostsContainer } from "./styles"
import { PlusIcon } from "@phosphor-icons/react"
import { CreatePostModal } from "@/components/CreatePostModal"
import { Title } from "@/styles/global"

export function PostsContainer() {
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false)

  let testPosts = [
    {
      author: { name: "Felipe Elias", synthesis: "Java Developer", avatar_url: "https://github.com/feponiel.png" },
      content: "# teste H1\n ---\n## teste H2\n ---\n### teste H3\n ---\n#### teste H4\n ---\n##### teste H5\n ---\n###### teste H6\n ---\n texto normal \n\n --- \n[hyperlink](https://github.com/feponiel) X \n\n ---\n ![LUFFY](https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/luffy-gear-5-sitting.jpg?w=1200&h=675&fit=crop)\n\n > block quoteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\n\n `var inlineCode = 0` X\n\n *italic* X\n\n **bold** X\n\n - ulist item \n\n 1. olist item\n\n \n\n\n\n\n\n\n\n\n \n \n \n \n https://github.com\n aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa a a                                          a           a    a                                a",
      likes: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      author: { name: "João Victor", synthesis: "Linux Specialist", avatar_url: "https://github.com/jhonnzz.png" },
      content: `\`\`\`java
String codeBlock = "I'm not a code block";
bool isCodeBlock = true;

if (isCodeBlock) {
  codeBlock = "I'm a code block";
}

System.out.println(codeBlock);
\`\`\`
test`,
      likes: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  let posts: {
    author: {
        name: string;
        synthesis: string;
        avatar_url: string;
    };
    content: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
  }[] = [] // simulating no posts

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
