import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeWebService } from 'src/app/services/employee-web.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee!:Employee;
  pathVariableId!:number;
  subscriber!: Subscription;

  constructor(private employeeWebService:EmployeeWebService, private activatedRoute:ActivatedRoute, private router:Router) { }

  getEmployee(id:number){
    this.employeeWebService.getEmployeeById(id).then(
      (employee:Employee)=>{
        this.employee=employee;
        console.log("The Employee was successfully grabbed from the API: "+this.employee);
      },
      (error:Error)=>{console.log("Employee of ID: "+id+" could not be found",error);}
    );
  }

  updateEmployee(value:any){
    let updatedEmployee:Employee = value;
    updatedEmployee.id = this.employee.id;
    updatedEmployee.state = this.employee.state;
    updatedEmployee.country = this.employee.country;

    this.employeeWebService.updateEmployee(updatedEmployee).then(
      (employee:Employee)=>{
        console.log("The Employee's information was successfully updated: "+employee);
        this.router.navigate(['display-employee/'+this.employee.id]);
      },
      (error:Error)=>{console.log("Employee of ID: "+updatedEmployee.id+" could not be found",error);}
    );
  }

  ngOnInit(): void {
    this.subscriber = this.activatedRoute.paramMap.subscribe({
      next:paramMap=>{
        let idStr:string|null = paramMap.get('id');
        if(idStr!==null){
          this.pathVariableId = parseInt(idStr);
          this.getEmployee(this.pathVariableId);
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
