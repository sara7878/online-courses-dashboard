import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { StfooterComponent } from './dashboard/stfooter/stfooter.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { TrainersComponent } from './dashboard/trainers/trainers.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { AdminsComponent } from './dashboard/admins/admins.component';
import { CourseContentComponent } from './dashboard/course-content/course-content.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { FeedbacksComponent } from './dashboard/feedbacks/feedbacks.component';
import { ExamsComponent } from './dashboard/exams/exams.component';

import { AddCategoryComponent } from './dashboard/Forms/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './dashboard/Forms/test/test.component';
import { HttpClientModule } from '@angular/common/http';
// import { AddQuestionComponent } from './Forms/add-question/add-question.component';
// import { UpdateQuestionComponent } from './Forms/update-question/update-question.component';
// import { AddCourseContentComponent } from './Forms/add-course-content/add-course-content.component';
import { EditCourseContentComponent } from './Forms/edit-course-content/edit-course-content.component';
// import { AddAdminComponent } from './Forms/add-admin/add-admin.component';
// import { AddCourseComponent } from './Forms/add-course/add-course.component';
// import { UpdateCourseComponent } from './Forms/update-course/update-course.component';
// import { AddExamComponent } from './Forms/add-exam/add-exam.component';
// import { UpdateExamComponent } from './Forms/update-exam/update-exam.component';
import { AddAdminComponent } from './dashboard/Forms/add-admin/add-admin.component';
import { AddCourseComponent } from './dashboard/Forms/add-course/add-course.component';
import { UpdateCourseComponent } from './dashboard/Forms/update-course/update-course.component';
import { UpdateCategoryComponent } from './dashboard/Forms/update-category/update-category.component';
import { AddExamComponent } from './dashboard/Forms/add-exam/add-exam.component';
import { UpdateExamComponent } from './dashboard/Forms/update-exam/update-exam.component';
import { AddCourseContentComponent } from './dashboard/Forms/add-course-content/add-course-content.component';
import { TestrouterComponent } from './dashboard/testrouter/testrouter.component';

import { HomeComponent } from './main/Layouts/home/home.component';
import { AboutComponent } from './main/Layouts/about/about.component';
import { CourcesComponent } from './main/Layouts/cources/cources.component';
import { PricesComponent } from './main/Layouts/prices/prices.component';
import { ContactComponent } from './main/Layouts/contact/contact.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { FeedbackComponent } from './main/Layouts/feedback/feedback.component';
import { AboutPageComponent } from './main/about-page/about-page.component';
import { CountsComponent } from './main/Layouts/counts/counts.component';
import { WhyUsComponent } from './main/Layouts/why-us/why-us.component';
import { FeaturesComponent } from './main/Layouts/features/features.component';
import { PopularCourcesComponent } from './main/Layouts/popular-cources/popular-cources.component';
import { HeroComponent } from './main/Layouts/hero/hero.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { CoursesPageComponent } from './main/courses-page/courses-page.component';
import { TrainersPageComponent } from './main/trainers-page/trainers-page.component';
import { CategoriesPageComponent } from './main/categories-page/categories-page.component';
import { ContactPageComponent } from './main/contact-page/contact-page.component';
import { CoursesDetailsPageComponent } from './main/courses-details-page/courses-details-page.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { CategoriesmainComponentComponent } from './main/Layouts/categoriesmain-component/categoriesmain-component.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { AddQuestionComponent } from './dashboard/Forms/add-question/add-question.component';
import { UpdateQuestionComponent } from './dashboard/Forms/update-question/update-question.component';

import { QuestionsComponent } from './dashboard/questions/questions/questions.component';
import { FeedbackFormComponent } from './main/Layouts/feedback-form/feedback-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainerLoginComponent } from './main/trainer-login/trainer-login.component';
import { TrainerRegisterComponent } from './main/trainer-register/trainer-register.component';
import { ToastrModule } from 'ngx-toastr';
import { TrainersmainComponentComponent } from './main/Layouts/trainersmain-component/trainersmain-component.component';

import { RegisterStudentComponent } from './main/register-student/register-student.component';
import { LoginStudentComponent } from './main/login-student/login-student.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegisterComponent } from './dashboard/register/register.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    StatisticsComponent,
    StfooterComponent,
    CategoriesComponent,
    CoursesComponent,
    TrainersComponent,
    StudentsComponent,
    AdminsComponent,
    CourseContentComponent,
    ContactUsComponent,
    FeedbacksComponent,
    ExamsComponent,
    QuestionsComponent,
    AddCategoryComponent,
    TestComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    AddCourseContentComponent,
    EditCourseContentComponent,
    AddAdminComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    UpdateCategoryComponent,
    AddExamComponent,
    UpdateExamComponent,
    AddCourseContentComponent,
    TestrouterComponent,

    AppComponent,
    HomeComponent,
    AboutComponent,
    CourcesComponent,
    PricesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    FeedbackComponent,
    AboutPageComponent,
    CountsComponent,
    WhyUsComponent,
    FeaturesComponent,
    PopularCourcesComponent,
    HeroComponent,
    HomePageComponent,
    CoursesPageComponent,
    TrainersPageComponent,
    CategoriesPageComponent,
    ContactPageComponent,
    CoursesDetailsPageComponent,
    TrainersmainComponentComponent,
    CategoriesmainComponentComponent,
    NavbarMainComponent,
    TrainerLoginComponent,
    TrainerRegisterComponent,
    FeedbackFormComponent,
    RegisterStudentComponent,
    LoginStudentComponent,
    LoginComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
