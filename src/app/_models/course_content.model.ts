import { Course } from "./course.model"

export interface CourseContent{
    Id ?:number,
    course_id :Course,
    name ?:string,
    content ?:string
}