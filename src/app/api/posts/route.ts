import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json(null, { status: 401 })
  }

  const author = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  })

  if (!author) {
    return NextResponse.json(null, { status: 404 })
  }

  const { content } = await request.json()

  if (!content || content.length < 1) {
    return NextResponse.json(null, { status: 422 })
  }

  const post = await prisma.post.create({
    data: {
      author_id: author.id,
      content,
    }
  })

  return NextResponse.json(post, { status: 201 })
}

export async function GET() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json(null, { status: 401 })
  }

  const posts = await prisma.post.findMany({
    orderBy: {
      created_at: "desc"
    },
    
    include: {
      author: true,
      postLikes: {
        where: {
          user_id: session.user.id
        },
      },
      _count: {
        select: {
          postLikes: true,
          comments: true
        }
      }
    }
  })

  return NextResponse.json(posts.map(post => ({
    id: post.id,
    author_id: post.author_id,
    content: post.content,
    created_at: post.created_at,
    updated_at: post.updated_at,
    comments_amount: post._count.comments,
    likes_amount: post._count.postLikes,
    is_liked: post.postLikes.length > 0,

    author: {
      name: post.author.name,
      synthesis: post.author.synthesis,
      avatar_url: post.author.avatar_url
    }
  })), { status: 200 })
}
