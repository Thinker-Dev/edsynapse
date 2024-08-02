"use server"

import { db } from "@/providers/prisma/client"
import { CreateUserDto, User } from "./user"

export const createUser = async (dto: CreateUserDto) => {
  try {
    const user = await db.user.create({
      data: { ...dto }
    })
    return user
  } catch (err) {
    console.error(err)
  }
}

export const getUsers = async (): Promise<User[]> => {
  const users = await db.user.findMany()
  return users as User[]
}

export const getUserById = async (id: string) => {
  if (!id) return console.error('id was not provided')
  const user = await db.user.findUnique({
    where: {
      id: id
    }
  })
  if (!user) {
    console.log("User not found")
    return null
  }
  return user
}

export const getUserByEmail = async (email: string) => {
  if (!email) return console.error('email was not provided')
  const user = await db.user.findUnique({
    where: {
      email: email
    }
  })
  if (!user) {
    console.log("User not found")
    return null
  }

  return user
}