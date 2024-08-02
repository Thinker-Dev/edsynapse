import { IContent } from "../content/content";
import { ITopic } from "../topic/topic";

export type ICourse = {
  id: string;
  name: string;
  description: string;
  course_alias: string
  topics: ITopic[]
  created_at: datetime;
  updated_at: datetime;
}