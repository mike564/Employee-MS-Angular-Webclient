import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { DisplayEmployeesComponent } from './components/display-employees/display-employees.component';
import { EmployeesWithNameComponent } from './components/employees-with-name/employees-with-name.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'display-employees',component:DisplayEmployeesComponent},
  {path:'display-employee/:id',component:DisplayEmployeeComponent},
  {path:'employees-with-name/:firstName/:lastName',component:EmployeesWithNameComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
