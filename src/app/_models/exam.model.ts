import { Course } from "./course.model"
import { Question } from "./question.model";

export interface Exam{
    Id ?:number,
    name ?:string,
    course_id :Course,
    max_score ?:number
}