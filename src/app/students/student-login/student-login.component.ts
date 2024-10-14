import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Student {
  id: string;  
  enrollmentId: string;
  name: string;
  attendance: string;
  email: string;
  classes: string[];
}

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})


export class StudentLoginComponent {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}
  uniqueId: string = ''; 
  password: string = '';
  errorMessage: string = '';
  

  onSubmit() {
    // const student = this.students.find(s => s.enrollmentId === this.uniqueId);
    
    // if (this.uniqueId === 'admin' && this.password === 'password') {
    //   this.router.navigate([`students/${this.uniqueId}`]); 
    // } else {
    //   this.errorMessage = 'Invalid Unique ID or password';
    // }
    this.http.get<any[]>('http://localhost:3000/students')
      .pipe(
        catchError(error => {
          this.errorMessage = 'Error fetching student data';
          return of([]); // Return empty array in case of error
        })
      )
      .subscribe(students => {
        // Find the student by enrollmentId
        const student = students.find(s => s.enrollmentId === this.uniqueId);
        const password_entered = students.find(s => s.password === this.password);
        if (student) {
          if (!this.password) { 
            // If password field is empty
            this.errorMessage = 'Please enter a password';
            return;
          }
          if (student.password === this.password){
          // If the student is found, navigate to their profile
          this.router.navigate([`students/${student.enrollmentId}`]);
        } 
      }
      else {
          this.errorMessage = 'Invalid Enrollment ID or password';
        }
      });
        
  }


  // fetchData(): Observable<Student[]> {
  //   return this.http.get<Student[]>('http://localhost:3000/students');
  // }

}

