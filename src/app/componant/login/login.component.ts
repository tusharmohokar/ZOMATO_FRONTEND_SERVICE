import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
