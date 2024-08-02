export type User = {
  id: string
  username: string;
  email: string
  followers: User[],
  follows: User[]
}

export type CreateUserDto = {
  username: string,
  email: string
}