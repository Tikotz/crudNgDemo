import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/components/interfaces/ICourse';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {


  course:Course = {} as Course;
  id:number = 0;


  constructor(private courseService:CoursesService,private activedRoute:ActivatedRoute,private router:Router) {
    this.activedRoute.params.subscribe((params:Params) => {
      this.id = params['id'];
      })
  
   }

  ngOnInit(): void {
    this.courseService.getSingelCourse(this.id)
    .subscribe( (response:any) => {
      this.course = response;
      console.log(this.course);
    })
  }

  onSubmit(form:any){
    this.courseService
        .updateCourse(this.id,this.course)
        .subscribe({
          next: (response:any) => {
            this.router.navigate(['courses']);
          },
          error: (err:any) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
          }
        })

        // .subscribe( (response:any) => { 
        //   this.router.navigate(['courses']);
        // })
  }



}
