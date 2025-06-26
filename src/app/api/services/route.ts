import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: {
        published: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    return NextResponse.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, image, features } = await request.json()

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      )
    }

    // Create a slug from the title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // For now, we'll create a default user if none exists
    let defaultUser = await prisma.user.findFirst({
      where: { email: 'admin@elevate.com' }
    })

    if (!defaultUser) {
      defaultUser = await prisma.user.create({
        data: {
          name: 'Admin',
          email: 'admin@elevate.com',
          password: 'hashed_password',
          role: 'ADMIN'
        }
      })
    }

    const service = await prisma.service.create({
      data: {
        title,
        slug,
        description,
        image,
        features: features || [],
        published: true,
        authorId: defaultUser.id
      }
    })

    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 