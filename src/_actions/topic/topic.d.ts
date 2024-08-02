import { IContent } from "../content/content"
import { ICourse } from "../course/course"

export type ITopic = {
  id: string
  name: string
  description: string
  course_id: string
  contents: IContent[]
  created_at: datetime
  updated_at: datetime
}