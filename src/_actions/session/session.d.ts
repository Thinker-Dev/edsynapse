import { IContent } from "../content/content"

export type ISession = {
  id: string,
  content_id: string,
  user_id: string
  content: IContent,
  duration: number,
  created_at: datetime
  updated_at: datetime
}

export type ICreateSession = {
  content_id: string,
  duration: number,
  user_id: string
}
