import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  classroomName: string = '';
  classroomDescription: string = '';
  studentsCount: number = 0;
  classCode: string = '';
  currentDate = new Date();
  students: any[] = [];
  pageSize = 10;  // Items per page
  currentPage = 1; // Start from first page
  pagedStudents: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve classroom details from query params
    this.route.queryParams.subscribe(params => {
      this.classroomName = params['name'] || 'Unknown Classroom';
      this.classroomDescription = params['description'] || 'No Description Available';
      this.classCode = params['code'] || 'Classroom Code Not Available';
    });

    // Fetch students from db.json
    this.getStudents();
  }

  getStudents() {
    this.http.get<any[]>('http://localhost:3000/students')
      .subscribe(data => {
        this.students = data;
        this.studentsCount = this.students.length;
        this.setPage(1); // Display the first page of students
      });
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedStudents = this.students.slice(startIndex, endIndex);
  }

  submitAttendance() {
    console.log('Attendance submitted:', this.students);
    // Additional logic for handling attendance submission
  }
}
