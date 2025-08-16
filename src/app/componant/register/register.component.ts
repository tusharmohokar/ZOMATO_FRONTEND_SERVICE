import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = {
    email :'',
    userName: '',
    userPassword: ''
  };
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:9098/v1/user/create', this.user)
      .subscribe({
        next: (response: any) => {
          console.log("✅ Login successful", response);
          // You can redirect or show success message here
        },
        error: (error: any) => {
          console.error("❌ Login failed", error);
          // Show error message to user
        }
      });
  }

}
