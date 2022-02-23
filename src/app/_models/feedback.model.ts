import { Course } from "./course.model";
import { Student } from "./student.model"

export interface Feedback{
    id ?:number,
    name ?:string,
    desc?:string,
    student_id ?:Student,
    course_id?:Course

}