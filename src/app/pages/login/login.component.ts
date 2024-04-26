import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName!:string

  private readonly router = inject(Router)

  login(){
    sessionStorage.setItem('user', this.userName)


    this.router.navigate(['home'])
  }
}
