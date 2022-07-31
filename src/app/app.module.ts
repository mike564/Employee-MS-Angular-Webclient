import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DisplayEmployeesComponent } from './components/display-employees/display-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { EmployeesWithNameComponent } from './components/employees-with-name/employees-with-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddEmployeeComponent,
    DisplayEmployeesComponent,
    UpdateEmployeeComponent,
    NotFoundComponent,
    DisplayEmployeeComponent,
    EmployeesWithNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
