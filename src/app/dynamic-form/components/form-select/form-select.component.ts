import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';

@Component({
  selector: 'app-form-select',
  //templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
  template: `
  <div 
    class="dynamic-field form-select form-group"
    [formGroup]="group">
    <label>{{ config.label }}</label>
    <select class="form-control" [formControlName]="config.name">
      <option value="">{{ config.placeholder }}</option>
      <option *ngFor="let option of config.options">
        {{ option }}
      </option>
    </select>
  </div>
`
})
export class FormSelectComponent implements OnInit,Field {

  config: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
