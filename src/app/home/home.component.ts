import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
goToStudentSinup() {
  this.router.navigate(['/students/signup-student']);
}

constructor (private router: Router){

}
goToAdminSignup() {
  this.router.navigate(['/admin/signup']);
}

}
