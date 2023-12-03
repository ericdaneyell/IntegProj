import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
  username:string;

  constructor(
    private router:Router
  ) { }

 

  goToHome(){
    this.router.navigate(['/home'])
  }

}
