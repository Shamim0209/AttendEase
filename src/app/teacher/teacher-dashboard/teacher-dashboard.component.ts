import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  showClassroomForm: boolean = false;
  showActiveRequests: boolean = false;
  uniqueCode: string = '';
  existingClasses: any[] = [];
  classroomName: any;
  classroomDescription: any;
  subject: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getClasses();
  }

  // Fetch Classes from db.json
  getClasses() {
    this.http.get<any[]>('http://localhost:3000/classes')
      .subscribe(data => {
        this.existingClasses = data;
      });
  }

  // Toggle Classroom Form
  toggleClassroomForm() {
    this.showClassroomForm = !this.showClassroomForm;
    if (this.showClassroomForm) {
      this.generateUniqueCode();
    }
  }

  // Toggle Active Requests Form
  toggleActiveRequests() {
    this.showActiveRequests = !this.showActiveRequests;
  }

  // Generate Unique Code
  generateUniqueCode() {
    this.uniqueCode = Math.random().toString(36).substr(2, 8).toUpperCase();
  }

  // Create Classroom (In memory for now)
  createClassroom() {
    const newClassroom = {
      name: this.classroomName,
      description: this.classroomDescription,
      students: 0,
      code: this.uniqueCode
    };
    this.existingClasses.push(newClassroom);
    this.clearForm();
    this.toggleClassroomForm();
  }

  clearForm() {
    this.classroomName = '';
    this.classroomDescription = '';
    this.subject = '';
  }

  // Navigate to TakeAttendance Component with classroom details as query params
  takeAttendance(classroom: any) {
    this.router.navigate(['/teacher/take-attendance'], { 
      queryParams: { 
        name: classroom.name, 
        description: classroom.description, 
        students: classroom.students,
        code: classroom.code,
      } 
    });
  }
}
