import { ITopic } from "../topic/topic"

export type IContent = {
  id: string,
  name: string,
  description: string | null,
  url: string,
  topic_id: string
  topic: ITopic
  type: 'VIDEO' | 'PPT'
}