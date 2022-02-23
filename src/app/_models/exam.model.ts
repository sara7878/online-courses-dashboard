import { Course } from "./course.model"
import { Question } from "./question.model";

export interface Exam{
    id ?:number,
    name ?:string,
    course_id :Course,
    max_score ?:number
}
