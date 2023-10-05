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
    firstName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    lastName : ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    email : ['', [Validators.required,Validators.email]],
    phoneno : ['', [Validators.required,Validators.pattern(/^[6-9]\d{9}$/),]],
    nationality : ['', Validators.required],
    
  });
  secondFormGroup = this._formBuilder.group({
    houseno : ['', [Validators.required,Validators.pattern(/^[0-9]+$/),],],
    city : ['', Validators.required],
    state : ['', Validators.required],
    pincode : ['', Validators.required],
    houseno1 : ['', [Validators.required,Validators.pattern(/^[0-9]+$/),],],
    city1 : ['', Validators.required],
    state1: ['', Validators.required],
    pincode1: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    f_fname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    f_lname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    m_fname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    m_lname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    s_title: ['', Validators.required],
    s_fname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
    s_lname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),]],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

}
