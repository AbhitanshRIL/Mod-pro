import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgSwitch, NgSwitchCase, AsyncPipe} from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-kyc-form',
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatRadioModule,
    MatSelectModule,
    CommonModule
  ],
})
export class KycFormComponent {
  firstFormGroup = this._formBuilder.group({
    title : ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName : ['', Validators.required],
    email : ['', Validators.required],
    phoneno : ['', Validators.required],
    nationality : ['', Validators.required],
    
  });
  secondFormGroup = this._formBuilder.group({
    houseno : ['', Validators.required],
    housename : ['', Validators.required],
    society : ['', Validators.required],
    locality : ['', Validators.required],
    street : ['', Validators.required],
    city : ['', Validators.required],
    state : ['', Validators.required],
    pincode : ['', Validators.required],
    houseno1 : ['', Validators.required],
    housename1 : ['', Validators.required],
    society1 : ['', Validators.required],
    locality1 : ['', Validators.required],
    street1 : ['', Validators.required],
    city1 : ['', Validators.required],
    state1: ['', Validators.required],
    pincode1: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    f_fname: ['', Validators.required],
    f_mname: ['', Validators.required],
    f_lname : ['', Validators.required],
    m_fname: ['', Validators.required],
    m_mname: ['', Validators.required],
    m_lname : ['', Validators.required],
    s_title: ['', Validators.required],
    s_fname: ['', Validators.required],
    s_mname: ['', Validators.required],
    s_lname: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

}
