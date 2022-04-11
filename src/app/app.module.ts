import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit/edit-course.component';
import { DeleteCourseComponent } from './components/delete/delete-course.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes:Routes =[
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'courses', component: CoursesComponent},
  {path:'courses/add-Course', component: AddCourseComponent},
  {path:'courses/delete/:id', component:DeleteCourseComponent},
  {path:'courses/edit/:id', component: EditCourseComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent,
    AddCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
