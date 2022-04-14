import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/components/interfaces/ICourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(private _courseService: CoursesService) {
     _courseService
        .getCourses()
        .subscribe( (courses: any) => {
          this.courses = courses;
        });
   }

  ngOnInit(): void {
  }

}
