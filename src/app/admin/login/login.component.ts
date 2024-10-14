import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uniqueId: string = ''; 
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    
    if (this.uniqueId === 'admin' && this.password === 'password') {
      this.router.navigate(['teacher/dashboard']); 
    } else {
      this.errorMessage = 'Invalid Unique ID or password';
    }
  }
}
