import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from '../../shared/constants.ts';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = {
    email :'',
    userName: '',
    userPassword: ''
  };

  showToaster = false;
  toasterMessage = '';

  constructor(private http: HttpClient,private router:Router) {}

  onSubmit() {
    debugger
  this.http.post<ApiResponse>('http://localhost:9098/v1/user/create', this.user)
    .subscribe({
      next: (response: ApiResponse) => {
        // Show message from backend if available
        this.toasterMessage = response?.statusMessage || "✅ Registration successful!";
        this.showToaster = true;

        // Hide toaster and navigate after 3 seconds
        setTimeout(() => {
          this.showToaster = false;
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (error: any) => {
        console.error("❌ Registration failed", error);

        // Show backend error message if available
        this.toasterMessage = error?.error?.statusMessage || "❌ Registration failed!";
        this.showToaster = true;

        setTimeout(() => {
          this.showToaster = false;
        }, 3000);
      }
    });
}



}
