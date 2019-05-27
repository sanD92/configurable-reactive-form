import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

@Component({
  selector: 'app-form-input',
  //templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  template: `
  <div 
    class="dynamic-field form-input form-group" 
    [formGroup]="group">
    <label>{{ config.label }}</label>
    <input class="form-control"
      type="text"
      [attr.placeholder]="config.placeholder"
      [formControlName]="config.name">
  </div>
`
})
export class FormInputComponent implements OnInit,Field {

  config:FieldConfig;
  group:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
