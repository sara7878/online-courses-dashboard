import { Course } from "./course.model";
import { Student } from "./student.model";

export interface CourseStudent{
    student_id?:Student,
    course_id  ?:Course

}