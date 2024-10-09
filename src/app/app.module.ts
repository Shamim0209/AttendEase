import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentsComponent } from './students/students.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupStudentComponent } from './students/signup-student/signup-student.component';
import { StudentsDashboardComponent } from './students/students-dashboard/students-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TeacherComponent,
    StudentsComponent,
    SignupComponent,
    SignupStudentComponent,
    StudentsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
