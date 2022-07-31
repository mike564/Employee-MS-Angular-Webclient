import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeWebService {

  readonly BASE_URL="http://localhost:8080/api/v1/employees";
  readonly HEADERS = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient:HttpClient) { }

  addEmployee(employee:Employee){
    return lastValueFrom(this.httpClient.post<Employee>(this.BASE_URL,employee,{headers:this.HEADERS}));
  }

  getEmployees():Promise<Employee[]>{
    return lastValueFrom(this.httpClient.get<Employee[]>(this.BASE_URL,{headers:this.HEADERS}));
  }

  getEmployeeById(id:number):Promise<Employee>{
    return lastValueFrom(this.httpClient.get<Employee>(this.BASE_URL+'/'+id,{headers:this.HEADERS}));
  }

  getEmployeesByName(firstName:string,lastName:string):Promise<Employee[]>{
    return lastValueFrom(this.httpClient.get<Employee[]>(this.BASE_URL+"/firstName/"+firstName+"/lastName/"+lastName,{headers:this.HEADERS}));
  }

  updateEmployee(employee:Employee):Promise<Employee>{
    console.log(employee)
    return lastValueFrom(this.httpClient.put<Employee>(this.BASE_URL,employee,{headers:this.HEADERS}));
  }

  removeEmployee(id:number):Promise<Employee>{
    return lastValueFrom(this.httpClient.delete<Employee>(this.BASE_URL+"/"+id,{headers:this.HEADERS}));
  }

}
