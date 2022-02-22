import { Course } from "./course.model"
import { Question } from "./question.model";

export interface Exam{
    id ?:number,
    name ?:string,
    course_id ?:Course,
    //questions_id ?:Question,
    max_score ?:number
}
