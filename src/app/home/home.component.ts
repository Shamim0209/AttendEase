import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToAdminLogin() {
    this.router.navigate(['/admin/login']);
  }
  goToAdminSignup() {
    this.router.navigate(['/admin/signup']);
  }
  goToStudentLogin(){
    this.router.navigate(['/student/login'])
  }
  goToStudentSignup() {
    this.router.navigate(['/students/signup-student']);
  }


}
