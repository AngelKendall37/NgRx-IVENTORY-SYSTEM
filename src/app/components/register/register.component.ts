import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.authService.register(newUser).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error en el registro:', error);
      }
    );
  }
}
