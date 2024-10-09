import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
goToStudentLogin() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  goToAdminLogin() {
    this.router.navigate(['/admin/login']);
  }


}
