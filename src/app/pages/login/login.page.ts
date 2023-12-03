import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username: any;
password: any;

  constructor( private router:Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  goToStart(){
    this.router.navigate(['/start'])
  }

  signIn() {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      // Navigate to the desired route after successful login
      this.router.navigate(['/start']); // Change '/home' to your desired route
      this.userService.setUsername(this.username);
    } else {
      // Handle failed login (e.g., display an error message)
      alert('Login failed. Please check your credentials.');
    }
  }

}
