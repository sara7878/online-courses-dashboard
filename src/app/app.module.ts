import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StfooterComponent } from './stfooter/stfooter.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { StudentsComponent } from './students/students.component';
import { AdminsComponent } from './admins/admins.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ExamsComponent } from './exams/exams.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddCategoryComponent } from './Forms/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './Forms/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseContentComponent } from './Forms/add-course-content/add-course-content.component';
import { EditCourseContentComponent } from './Forms/edit-course-content/edit-course-content.component';
import { AddAdminComponent } from './Forms/add-admin/add-admin.component';
import { AddCourseComponent } from './Forms/add-course/add-course.component';
import { UpdateCourseComponent } from './Forms/update-course/update-course.component';
import { AddExamComponent } from './Forms/add-exam/add-exam.component';
import { UpdateExamComponent } from './Forms/update-exam/update-exam.component';


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
    AddCourseContentComponent,
    EditCourseContentComponent,
    AddAdminComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    AddExamComponent,
    UpdateExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
