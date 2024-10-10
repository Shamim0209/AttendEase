import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './admin/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SignupStudentComponent } from './students/signup-student/signup-student.component';
import { StudentsDashboardComponent } from './students/students-dashboard/students-dashboard.component';

<<<<<<< HEAD
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TakeAttendanceComponent } from './teacher/take-attendance/take-attendance.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'teacher/dashboard', component: TeacherDashboardComponent },
  { path: 'teacher/take-attendance', component: TakeAttendanceComponent },

=======
const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'admin/signup', component: SignupComponent},
  {path: 'students/signup-student', component: SignupStudentComponent},
  {path: 'students/students-dashboard', component: StudentsDashboardComponent}
>>>>>>> 07fc72d76b4b1777ff72d9a29995cabc524eddb3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
