import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';



export interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];


  constructor(public _usersService:UsersService,
              public _router:Router){ 
    this.setMenuItems();
  }

  ngOnInit(): void {
  }

  setMenuItems() {
    this.items.push({title: 'Home', link: 'dashboard'});
    this.items.push({title: 'Courses', link: 'courses'});

  }

  onLogout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
