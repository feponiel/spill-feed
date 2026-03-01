import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(request: NextRequest, { params }: { params: { postId: string } }) {
  const { postId } = await params
  const { tags } = await request.json()

  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return NextResponse.json(null, { status: 401 })
  }

  if (!tags || tags.length > 1) {
    return NextResponse.json(null, { status: 422 })
  }

  prisma.tag.createMany({
    data: tags
  })

  return new Response(null, { status: 204 });
}