import { Course } from './course.model';
import { Student } from './student.model';

export interface CourseStudent {
  student_id?: number;
  student?: Student;
  course_id?: number;
  course?: Course;
}
