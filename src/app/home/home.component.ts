import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD

=======
>>>>>>> 07fc72d76b4b1777ff72d9a29995cabc524eddb3
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
goToStudentSinup() {
  this.router.navigate(['/students/signup-student']);
}
<<<<<<< HEAD
  constructor(private router: Router) {}

  goToAdminLogin() {
    this.router.navigate(['/admin/login']);
  }

=======

constructor (private router: Router){

}
goToAdminSignup() {
  this.router.navigate(['/admin/signup']);
}
>>>>>>> 07fc72d76b4b1777ff72d9a29995cabc524eddb3

}
