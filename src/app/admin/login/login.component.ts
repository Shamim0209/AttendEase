import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

interface Admin {
  adminUniqueId: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uniqueId: string = ''; 
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    // Fetch admin data from db.json
    this.http.get<Admin[]>('http://localhost:3000/admin')
      .pipe(
        catchError(error => {
          this.errorMessage = 'Error fetching admin data';
          return of([]);  // Return an empty array if there is an error
        })
      )
      .subscribe(admins => {
        // Find the admin by uniqueId
        const admin = admins.find(a => a.adminUniqueId === this.uniqueId);
        
        if (admin) {
          // If the admin is found, check if the password matches
          if (admin.password === this.password) {
            // Navigate to the teacher dashboard if login is successful
            this.router.navigate(['teacher/dashboard']);
          } else {
            this.errorMessage = 'Invalid Unique ID or password';
          }
        } else {
          this.errorMessage = 'Invalid Unique ID or password';
        }
      });
  }
}
