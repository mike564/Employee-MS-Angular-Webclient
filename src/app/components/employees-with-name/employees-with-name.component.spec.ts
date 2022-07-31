import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesWithNameComponent } from './employees-with-name.component';

describe('EmployeesWithNameComponent', () => {
  let component: EmployeesWithNameComponent;
  let fixture: ComponentFixture<EmployeesWithNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesWithNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
