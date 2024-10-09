import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  classroomName: string = '';
  classroomDescription: string = '';
  studentsCount: number = 0;
  classCode: string= '';
  currentDate = new Date();
  enrollmentId= String;

  students = [
    { name: 'John Doe', attendance: 'present', enrollmentId: '12345678' },
    { name: 'Jane Smith', attendance: 'absent', enrollmentId: '87654321' },
    { name: 'Sam Wilson', attendance: 'present', enrollmentId: '23456789' },
    { name: 'Lucy Brown', attendance: 'present', enrollmentId: '98765432' },
    { name: 'Tom Holland', attendance: 'absent', enrollmentId: '34567890' },
    { name: 'Emma Watson', attendance: 'present', enrollmentId: '87651234' },
    { name: 'Chris Evans', attendance: 'present', enrollmentId: '56789012' },
    { name: 'Scarlett Johansson', attendance: 'absent', enrollmentId: '09876543' },
    { name: 'Robert Downey', attendance: 'present', enrollmentId: '43215678' },
    { name: 'Mark Ruffalo', attendance: 'absent', enrollmentId: '87650987' }
  ];
 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve classroom details from query params
    this.route.queryParams.subscribe(params => {
      this.classroomName = params['name'] || 'Unknown Classroom';
      this.classroomDescription = params['description'] || 'No Description Available';
      this.studentsCount = params['students'] || this.students.length;
      this.classCode=params['code'] || 'Classroom Code Not Available';
      this.enrollmentId=params['enrollmentId'];
    });
  }

  submitAttendance() {
    console.log('Attendance submitted:', this.students);
    // Additional logic for handling the attendance submission
  }
}
