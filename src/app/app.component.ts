import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username: string;
  constructor(private userService: UserService, private authService: AuthService) {
    const currentUser = this.authService.getCurrentUser();
    this.username = currentUser ? currentUser.username : '';
  }

}




