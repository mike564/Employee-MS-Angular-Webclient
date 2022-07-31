import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeWebService } from 'src/app/services/employee-web.service';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {
  employees:Employee[] = [];
  removedEmployee!:String|null;

  constructor(private employeeWebService:EmployeeWebService) { }

  getEmployees(){
    this.employeeWebService.getEmployees().then(
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
          this.getEmployees();
        },
        (error:Error)=>console.log("Employee with id:" + id + " could not be found ",error)
    );
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
