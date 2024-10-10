import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {


  uniqueId: string = ''; 
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    
    if (this.uniqueId === 'admin' && this.password === 'password') {
      this.router.navigate(['/admin']); 
    } else {
      this.errorMessage = 'Invalid Unique ID or password';
    }
  }

}
