import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: EmployeeModel[] = [];

  constructor(private employeesService: EmployeesService) { }

  employee : EmployeeModel = new EmployeeModel();
  showAllEmployees = false;
  showEmployeeByID = false;

  ngOnInit(): void {
  }

  getEmployeeById(form: NgForm){

    let peticion: Observable<any>;

    if( form.invalid){
      this.employeesService.getEmployees()
      .subscribe( (resp:any) =>{
        this.employees = resp.data;
        this.showAllEmployees =true;
        this.showEmployeeByID = false;
      });
      return;
    
    }else{
      this.employee = form.value;
      this.employeesService.getEmployeesById( this.employee.id )
      .subscribe( (resp:any) =>{
        this.employee = resp;

        if(this.employee === null ){
            this.employee = {};
        }else{
          this.showEmployeeByID = true;
          this.showAllEmployees = false;
        }
        
      });
    }
    
    

  }
}
