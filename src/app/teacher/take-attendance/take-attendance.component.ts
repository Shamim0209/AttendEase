import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {
stayOnPage($event: MouseEvent) {
event?.preventDefault();
}

  classroomName: string = '';
  classroomDescription: string = '';
  studentsCount: number = 0;
  classCode: string = '';
  currentDate = new Date();
  students: any[] = [];
  pageSize = 10;  
  currentPage = 1; 
  pagedStudents: any[] = [];
  totalPages: number = 0; 
  successMessage: string='';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch classroom details from query parameters
    this.route.queryParams.subscribe(params => {
      this.classroomName = params['name'] || 'Unknown Classroom';
      this.classroomDescription = params['description'] || 'No Description Available';
      this.classCode = params['code'] || 'Classroom Code Not Available';
    });

    // Fetch the list of students
    this.getStudents();
  }

  // Fetch the student data from the mock database and initialize attendance to null
  getStudents() {
    this.http.get<any[]>('http://localhost:3000/students')
      .subscribe(data => {
        this.students = data.map(student => ({
          ...student,
          attendance: null  
        }));
        this.studentsCount = this.students.length;
        this.totalPages = Math.ceil(this.students.length / this.pageSize); 
        this.setPage(1);  // Load the first page
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return; 
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedStudents = this.students.slice(startIndex, endIndex);  // Display 10 students per page
  }

  // Submit the attendance form and log the students' data
  submitAttendance() {
    const currentDateTime = new Date();
    
    // Display the success message
    this.successMessage = `Attendance is submitted successfully on ${currentDateTime.toLocaleDateString()} at ${currentDateTime.toLocaleTimeString()}`;
    
    // Clear the attendance (reset checkboxes)
    this.students.forEach(student => {
      student.attendance = ''; // Reset attendance for each student
    });
  }
  
}
