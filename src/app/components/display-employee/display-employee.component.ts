import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observer, Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeWebService } from 'src/app/services/employee-web.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  employee:Employee|null = null;
  pathVariableId!:number;
  isEmployeeDeleted:boolean = false;
  subscriber!:Subscription;

  constructor(private employeeWebService:EmployeeWebService, private activatedRoute:ActivatedRoute) { }

  getEmployee(id:number){
    this.employeeWebService.getEmployeeById(id).then(
      (employee:Employee)=>{
        this.employee=employee;
        console.log("The Employee was successfully grabbed from the API: "+this.employee);
      },
      (error:Error)=>{console.log("Employee of ID: "+id+" could not be found",error);}
    );
  }

  removeEmployee(id:number){
    this.employeeWebService.removeEmployee(id).then(
      (employee:Employee)=>{console.log("The Employee was successfully removed from the API: "+JSON.stringify(employee));
        this.isEmployeeDeleted=true;
      },
      (error:Error)=>console.log("Employee with id:" + id + " could not be found ",error)
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
