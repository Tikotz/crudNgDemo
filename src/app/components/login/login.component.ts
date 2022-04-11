import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly Email_KEY = 'email';
  isAuthenticated: boolean = false;

  constructor(private _router: Router) {
    

   }

  ngOnInit(): void {
  }


  onLogin(value: any): void {
    console.log('form values: ',value);
    if (value.email === "abc@gmail.com"
    && value.password === "a12345" ) {
      this.isAuthenticated = true;
      localStorage.setItem(this.Email_KEY, value.email);
      this._router.navigate(['dashboard'])
      /* לשמור את העובדה שהבנאדם נכנס ולהעביר אותו למסך הראשון */
    }
    else{
      this.isAuthenticated = false;
    }
  }

}
