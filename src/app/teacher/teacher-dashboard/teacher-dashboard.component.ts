import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {
  showClassroomForm: boolean = false;
  showActiveRequests: boolean = false;

  classroomName: string = '';
  classroomDescription: string = '';
  subject: string = '';
  uniqueCode: string = '';

  existingClasses = [
    { name: 'Angular', description: 'Introduction to Angular', students: 30, code: 'ANG67890' },
    { name: 'SpringBoot', description: 'Basic SpringBoot', students: 30, code: 'SPR34567' },
    { name: 'Docker', description: 'Introduction to Docker', students: 25, code: 'DOC34521' }
  ];

  constructor(private router: Router) {}

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

  // Create Classroom
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
