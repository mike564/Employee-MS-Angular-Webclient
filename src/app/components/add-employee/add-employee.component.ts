import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeWebService } from 'src/app/services/employee-web.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submitted:boolean = false;
  submittedEmployee!:string;

  constructor(private employeeWebService:EmployeeWebService) { }

  addEmployee(value:any){
    this.employeeWebService.addEmployee(value).then(
      (employee:Employee)=>{
        this.submitted = true;
        this.submittedEmployee = JSON.stringify(employee);
        console.log("Employee:"+employee+" has been sent to the REST API to be added to the database");
      },
      (error:Error)=>console.log("Employee:"+value+" could not be processed by the REST API",error)
    );
  }

  ngOnInit(): void {
  }

}
