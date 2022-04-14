import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly Email_KEY = 'email';
  isAuthenticated: boolean = false;

  constructor(private _router: Router,
    private _usersService: UsersService) { 
    

   }

  ngOnInit(): void {
  }


  onLogin(value: any): void {
    console.log('form values: ',value);

    this.isAuthenticated = true;

    this._usersService.login(value.email,value.password)
                      .subscribe( 
                        
                        (response:any) => {

                          if(response && response[0] && response[0].id ){
                            this.isAuthenticated = true;
                            localStorage.setItem(this.Email_KEY,value.email);
                            this._router.navigate(['dashboard']);
                          }
                          else{
                            localStorage.clear();
                            this.isAuthenticated = false;
                            throw new Error('NOT authenticated');
                          }
                      });     
  }

}
