import { Exam } from "./exam.model"
import { Student } from "./student.model"

export interface StudentExam{
    exam_id ?:Exam,
    student_id ?:Student,
    score?:number,
}