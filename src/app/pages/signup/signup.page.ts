import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  username: string;
  password: string;
  confirmPassword: string;
  

  constructor(private authService: AuthService) { }
 
}