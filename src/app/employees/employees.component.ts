import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-my-signup',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  employeeForm: FormGroup;
  employee: Employee = new Employee();

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeNo: [''],
      employeeName: [''],
      emailAddress: [''],
      employeeWorkOrder: '',
      billableType: 'billable',
      location: 'offShore',
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      backfilled: false,
      backfillEmployeeName: ['']
    });

    this.employeeForm.get('toDate').valueChanges.
      subscribe(value => this.validateDate(value));
  }

  validateDate(value: any): void {
    if (Date.parse(value) < Date.parse(this.employeeForm.get('fromDate').value)) {
      this.employeeForm.value.toDate = '';
      alert('To date should not be less then From date');
    }
  }

  save(): void {
    console.log(this.employeeForm);
    console.log('Saved:' + JSON.stringify(this.employeeForm.value));
  }
}
