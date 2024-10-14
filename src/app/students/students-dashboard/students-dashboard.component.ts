import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Student {
  id: string;  
  enrollmentId: string;
  name: string;
  attendance: string;
  email: string;
  classes: string[];
}

interface Class {
  id: number;
  name: string;
  description: string;
  students: number;
  code: string;
}

@Component({
  selector: 'app-students-dashboard',
  templateUrl: './students-dashboard.component.html',
  styleUrls: ['./students-dashboard.component.css']
})
export class StudentsDashboardComponent implements OnInit {
  studentProfile: Student | null = null;
  classAttendance: { className: string; totalClasses: number; attendedClasses: number; }[] = [];
  classCode: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id'); // This should capture the 'id' from the route

    // console.log(studentId);
    
    
    if (studentId) {
      this.fetchData().subscribe(
        data => {
          console.log('Fetched data:', data);
  
          if (data && Array.isArray(data)) {
            const student = data.find(s => s.id === studentId);

            console.log(student);
            
  
            if (student) {
              this.studentProfile = student;
  
              // Generate class attendance data
              this.classAttendance = this.studentProfile.classes.map(className => {
                const totalClasses = Math.floor(Math.random() * 50) + 1; 
                const attendedClasses = Math.floor(Math.random() * (totalClasses + 1)); 
                return {
                  className,
                  totalClasses,
                  attendedClasses
                };
              });
            } else {
              console.error(`Student with id ${studentId} not found.`);
            }
          } else {
            console.error('Students data is undefined.');
          }
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.error('No student id provided in the route.'); // Error message shown if id is missing
    }
  }
  

  fetchData(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students');
  }

  joinClassroom(): void {
    console.log('Joining classroom with code:', this.classCode);
  }

  getAttendancePercentage(attendedClasses: number, totalClasses: number): number {
    return Math.round((attendedClasses / totalClasses) * 100);
  }
}
