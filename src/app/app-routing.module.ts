import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsComponent } from './dashboard/admins/admins.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { CourseContentComponent } from './dashboard/course-content/course-content.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { ExamsComponent } from './dashboard/exams/exams.component';
import { FeedbacksComponent } from './dashboard/feedbacks/feedbacks.component';
import { AddCategoryComponent } from './dashboard/Forms/add-category/add-category.component';
import { AddCourseContentComponent } from './dashboard/Forms/add-course-content/add-course-content.component';
import { EditCourseContentComponent } from './Forms/edit-course-content/edit-course-content.component';
import { AddCourseComponent } from './dashboard/Forms/add-course/add-course.component';
import { UpdateCategoryComponent } from './dashboard/Forms/update-category/update-category.component';
import { UpdateCourseComponent } from './dashboard/Forms/update-course/update-course.component';
import { AddExamComponent } from './dashboard/Forms/add-exam/add-exam.component';
import { TestComponent } from './dashboard/Forms/test/test.component';
import { UpdateExamComponent } from './dashboard/Forms/update-exam/update-exam.component';

// import { QuestionsComponent } from './questions/questions.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { TrainersComponent } from './dashboard/trainers/trainers.component';
import { TestrouterComponent } from './dashboard/testrouter/testrouter.component';
import { AboutPageComponent } from './main/about-page/about-page.component';
import { CategoriesPageComponent } from './main/categories-page/categories-page.component';
import { ContactPageComponent } from './main/contact-page/contact-page.component';
import { CoursesDetailsPageComponent } from './main/courses-details-page/courses-details-page.component';
import { CoursesPageComponent } from './main/courses-page/courses-page.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { TrainersPageComponent } from './main/trainers-page/trainers-page.component';
import { AddQuestionComponent } from './dashboard/Forms/add-question/add-question.component';
import { UpdateQuestionComponent } from './dashboard/Forms/update-question/update-question.component';
import { TrainerLoginComponent } from './main/trainer-login/trainer-login.component';
import { TrainerRegisterComponent } from './main/trainer-register/trainer-register.component';
import { QuestionsComponent } from './dashboard/questions/questions/questions.component';
import { RegisterStudentComponent } from './main/register-student/register-student.component';
import { LoginComponent } from './dashboard/login/login.component';
import { AddAdminComponent } from './dashboard/Forms/add-admin/add-admin.component';
import { VideoComponent } from './main/Layouts/video/video.component';
import { PaymentComponent } from './main/payment/payment.component';
import { ContentComponent } from './main/content/content.component';
import { LoginStudentComponent } from './main/login-student/login-student.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './main/checkout/checkout.component';
import { CategoryCoursesComponent } from './main/category-courses/category-courses.component';
import { RegisterComponent } from './main/register/register.component';

import { MainLoginComponent } from './main/login/login.component';
import { UpdateTrainerComponent } from './main/Forms/update-trainer/update-trainer.component';
import { UpdateStudentComponent } from './main/Forms/update-student/update-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },

  {
    path: 'main',
    children: [
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'about', component: AboutPageComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: MainLoginComponent },
      { path: 'register/student', component: RegisterStudentComponent },
      {path:'login/student', component:LoginStudentComponent},

      { path: 'courses', component: CoursesPageComponent },
      { path: 'trainers', component: TrainersPageComponent },
      {path:'checkout' , component:CheckoutComponent},
      {path:'search', component:SearchComponent},
      { path: 'categories', component: CategoriesPageComponent },
      { path: 'contact', component: ContactPageComponent },
      {path: 'enroll/:courseId', component:ContentComponent },
      {path:'test', component:TestComponent},

      {
        path: 'courses',
        children: [
          { path: 'details/:courseId', component: CoursesDetailsPageComponent },
      
          { path: 'details/:courseId/videos', component: VideoComponent },
        ],
      },
      { path: 'payment/:courseId', component: PaymentComponent },

      {
        path: 'categories',
        children: [
          { path: 'details/:categoryId', component: CategoryCoursesComponent },
        ],
      },
      { path: 'trainer/login', component: TrainerLoginComponent },
      { path: 'trainer/register', component: TrainerRegisterComponent },
      { path: 'trainer/update', component: UpdateTrainerComponent },
      { path: 'student/update', component: UpdateStudentComponent },
      // { path: 'video', component: VideoComponent },

    ],
  },

  {
    path: 'dashboard',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: StatisticsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'trainers', component: TrainersComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'admins', component: AdminsComponent },
      { path: 'add-admin', component: AddAdminComponent },

      { path: 'contactus', component: ContactUsComponent },
      { path: 'contents', component: CourseContentComponent },
      { path: 'feedbacks', component: FeedbacksComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'exams', component: ExamsComponent },
      { path: 'add-category', component: AddCategoryComponent },

      { path: 'add-course', component: AddCourseComponent },
      { path: 'update-course/:id', component: UpdateCourseComponent },
      { path: 'update-category/:id', component: UpdateCategoryComponent },

      { path: 'add-exam', component: AddExamComponent },
      { path: 'update-exam/:id', component: UpdateExamComponent },

      { path: 'add-course-content', component: AddCourseContentComponent },
      {
        path: 'edit-course-content/:id',
        component: EditCourseContentComponent,
      },
      // { path: 'add-course', component: AddCourseComponent },
      // { path: 'update-course', component: UpdateCourseComponent },
      // { path: 'add-exam', component: AddExamComponent },
      // { path: 'update-exam', component: UpdateExamComponent },
      { path: 'home', component: StatisticsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'categories', component: CategoriesComponent },
      // { path: 'courses', component: CoursesComponent },
      // { path: 'trainers', component: TrainersComponent },
      // { path: 'students', component: StudentsComponent },
      // { path: 'admins', component: AdminsComponent },
      // { path: 'contactus', component: ContactUsComponent },
      // { path: 'contents', component: CourseContentComponent },
      // { path: 'feedbacks', component: FeedbacksComponent },
      // { path: 'questions', component: QuestionsComponent },
      // { path: 'exams', component: ExamsComponent },
      // { path: 'add-category', component: AddCategoryComponent },
      { path: 'add-question', component: AddQuestionComponent },
      { path: 'update-question/:id', component: UpdateQuestionComponent },
      // { path: 'add-course', component: AddCourseComponent },
      // { path: 'update-course', component: UpdateCourseComponent },
      // { path: 'add-course-content', component: AddCourseContentComponent },
      // {
      //   path: 'edit-course-content/:id',
      //   component: EditCourseContentComponent,
      // },
      // { path: 'add-course', component: AddCourseComponent },
      // { path: 'update-course', component: UpdateCourseComponent },
      // { path: 'add-exam', component: AddExamComponent },
      // { path: 'update-exam/:id', component: UpdateExamComponent },

      { path: 'test', component: TestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
