import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function DELETE(request: NextRequest, { params }: { params: { postId: string } }) {
  const { postId } = await params

  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json(null, { status: 401 })
  }

  await prisma.post.delete({
    where: {
      id: postId,
      author_id: session.user.id
    }
  })

  return new Response(null, { status: 204 });
}
