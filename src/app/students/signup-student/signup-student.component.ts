import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with validation
    this.signupForm = this.fb.group({
      enrollmentid: ['', Validators.required],
      class: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Form Data:', formData);
      // Navigate to student dashboard upon successful signup
      this.router.navigate(['/students/students-dashboard']);
    } else {
      console.log('Form is invalid');
    }
  }
}
