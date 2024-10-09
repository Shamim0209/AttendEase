import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './admin/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SignupStudentComponent } from './students/signup-student/signup-student.component';
import { StudentsDashboardComponent } from './students/students-dashboard/students-dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'admin/signup', component: SignupComponent},
  {path: 'students/signup-student', component: SignupStudentComponent},
  {path: 'students/students-dashboard', component: StudentsDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
