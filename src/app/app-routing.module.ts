import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AddCategoryComponent } from './Forms/add-category/add-category.component';
import { AddCourseContentComponent } from './Forms/add-course-content/add-course-content.component';
import { EditCourseContentComponent } from './Forms/edit-course-content/edit-course-content.component';
import { AddCourseComponent } from './Forms/add-course/add-course.component';
import { AddQuestionComponent } from './Forms/add-question/add-question.component';
import { TestComponent } from './Forms/test/test.component';
import { UpdateCourseComponent } from './Forms/update-course/update-course.component';
import { UpdateQuestionComponent } from './Forms/update-question/update-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StudentsComponent } from './students/students.component';
import { TrainersComponent } from './trainers/trainers.component';
import { AddExamComponent } from './Forms/add-exam/add-exam.component';
import { UpdateExamComponent } from './Forms/update-exam/update-exam.component';

const routes: Routes = [
  {path:'home' , component : StatisticsComponent} ,
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'categories' , component : CategoriesComponent} ,
  {path:'courses' , component : CoursesComponent} ,
  {path:'trainers' , component : TrainersComponent} ,
  {path:'students' , component : StudentsComponent} ,
  {path:'admins' , component : AdminsComponent} ,
  {path:'contactus' , component : ContactUsComponent} ,
  {path:'contents' , component : CourseContentComponent} ,
  {path:'feedbacks' , component : FeedbacksComponent} ,
  {path:'questions' , component : QuestionsComponent} ,
  {path:'exams' , component : ExamsComponent} ,
  {path:'add-category' , component : AddCategoryComponent} ,
  {path:'add-question' , component : AddQuestionComponent},
  {path:'update-question' , component : UpdateQuestionComponent},
  {path:'add-course' , component : AddCourseComponent} ,
  {path:'update-course' , component : UpdateCourseComponent} ,
  {path:'add-course-content' , component : AddCourseContentComponent} ,
  {path:'edit-course-content' , component : EditCourseContentComponent} ,
  {path:'add-course' , component : AddCourseComponent} ,
  {path:'update-course' , component : UpdateCourseComponent} ,
  {path:'add-exam' , component : AddExamComponent} ,
  {path:'update-exam' , component : UpdateExamComponent} ,

  {path:'test' , component : TestComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
