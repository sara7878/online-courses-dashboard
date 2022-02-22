import { Course } from "./course.model"

export interface CourseContent{
    id ?:number,
    course_id :Course,
    name ?:string,
    content ?:string
}