import { Component } from '@angular/core';

@Component({
  selector: 'app-students-dashboard',
  templateUrl: './students-dashboard.component.html',
  styleUrl: './students-dashboard.component.css'
})
export class StudentsDashboardComponent {

  studentProfile = {
    name: 'John Doe',
    class: '10',
    enrollment: 'ENR123456',
    email: 'john.doe@student.com'
  };

  classAttendance = [
    { className: 'Mathematics', totalClasses: 50, attendedClasses: 45 },
    { className: 'Science', totalClasses: 48, attendedClasses: 44 },
    { className: 'English', totalClasses: 40, attendedClasses: 38 }
  ];

  classCode: string = '';

  joinClassroom(): void {
    console.log('Joining classroom with code:', this.classCode);
    
  }
  
  getAttendancePercentage(attendedClasses: number, totalClasses: number): number {
    return Math.round((attendedClasses / totalClasses) * 100);
  }
}
