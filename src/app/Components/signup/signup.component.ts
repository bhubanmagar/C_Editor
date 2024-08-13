import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private router: Router) {}

  signup(data: NgForm) {
    console.log(data.value);
    this.router.navigate(['/login']); //navigating
  }
}
