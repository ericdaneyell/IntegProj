import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUser: { username: string; password: string } | null = null;
  private dummyAccounts: { username: string; password: string}[] = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'eric', password: 'marcelino'},
    // Add more dummy accounts if needed
  ];

  

  login(username: string, password: string): boolean {
    const user = this.dummyAccounts.find(
      account => account.username === username && account.password === password
    );
    

    // Simulate authentication success
    if (user) {
      console.log('Login successful for user:', username);
      return true;
    } else {
      console.log('Login failed for user:', username);
      return false;
    }
  }
  getCurrentUser(): { username: string; password: string } | null {
    return this.currentUser;
  }

  constructor() { }
}
