import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.router.navigate(['/inventory']);
      },
      (error) => {
        console.error('Error en login:', error);
      }
    );
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
