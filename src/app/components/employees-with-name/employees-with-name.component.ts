import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeWebService } from 'src/app/services/employee-web.service';

@Component({
  selector: 'app-employees-with-name',
  templateUrl: './employees-with-name.component.html',
  styleUrls: ['./employees-with-name.component.css']
})
export class EmployeesWithNameComponent implements OnInit {
  employees:Employee[]=[];
  removedEmployee!:String|null;
  firstName:string = "";
  lastName:string = "";
  subscriber!:Subscription

  constructor(private employeeWebService:EmployeeWebService, private activatedRoute:ActivatedRoute) { }

  getEmployeesByName(){
    this.employeeWebService.getEmployeesByName(this.firstName,this.lastName).then(
      (employees:Employee[])=>{
        this.employees=employees;
        console.log("Employees successfully retrieved from REST API: " + JSON.stringify(this.employees));
      },
      (error:Error)=>console.log('Something went wrong when retrieving Employees from the REST API: ',error),
    );

  }

  removeEmployee(id:number){
    this.employeeWebService.removeEmployee(id).then(
        (employee:Employee)=>{console.log("The Employee was successfully removed from the API: "+JSON.stringify(employee));
          this.removedEmployee = JSON.stringify(employee);
          this.getEmployeesByName();
        },
        (error:Error)=>console.log("Employee with id:" + id + " could not be found ",error)
    );
  }

  ngOnInit(): void {
    this.subscriber = this.activatedRoute.paramMap.subscribe({
      next:paramMap=>{
        let firstName = paramMap.get('firstName');
        let lastName = paramMap.get('lastName');
        if(firstName !== null && lastName !== null){
          this.firstName = firstName;
          this.lastName = lastName;
          this.getEmployeesByName();
        }
      },
      error:error=>console.log("something went wrong with getting the id",error),
      complete:()=>console.log("observer is no longer emitting values")
    });

  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }
}
