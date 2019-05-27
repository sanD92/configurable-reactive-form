import { Component, OnInit } from '@angular/core';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
 // templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css'],
  template: `
  <br/>
  <div 
    class="dynamic-field form-butto"
    [formGroup]="group">
    <button class="btn btn-primary"
      [disabled]="config.disabled"
      type="submit">
      {{ config.label }}
    </button>
  </div>
`
})
export class FormButtonComponent implements OnInit,Field {
  config: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
