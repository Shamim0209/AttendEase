import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { TakeAttendanceComponent } from './teacher/take-attendance/take-attendance.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { SignupComponent } from './admin/signup/signup.component';
import { StudentsDashboardComponent } from './students/students-dashboard/students-dashboard.component';
import { SignupStudentComponent } from './students/signup-student/signup-student.component';
import { StudentLoginComponent } from './students/student-login/student-login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TakeAttendanceComponent,
    TeacherDashboardComponent,
    SignupComponent,
    SignupStudentComponent,
    StudentsDashboardComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }