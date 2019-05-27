import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form/dynamic-form.component';
import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `

  <div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">

    <h1 style="text-align: center">Angular Reactive Configurable form </h1>
    <br/>
    <div class="app">
    <dynamic-form
      [config]="config"
      #form="dynamicForm"
      (submit)="submit($event)">
    </dynamic-form>
    {{ form.valid }}
    {{ form.value | json }}
  </div>
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>



  <router-outlet></router-outlet>
`
})
export class AppComponent implements AfterViewInit {
  title = 'configurable-reactive-form-demo';

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Last Name',
      name: 'last name',
      placeholder: 'Enter your last name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];


  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
