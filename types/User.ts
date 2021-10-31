import { Document } from 'mongoose'

export enum UserRole {
  admin,
  user,
}

export type User = {
  username: string
  password: string
  role: UserRole
} & Document
