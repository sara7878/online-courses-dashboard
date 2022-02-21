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
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
