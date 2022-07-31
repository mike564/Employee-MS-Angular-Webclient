import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  findEmployee(value:any){
    this.router.navigate(['/display-employee/'+value.id]);
  }

  findEmployeesByName(value:any){
    this.router.navigate(['/employees-with-name/'+value.firstName+'/'+value.lastName]);
  }

  ngOnInit(): void {
  }

}
