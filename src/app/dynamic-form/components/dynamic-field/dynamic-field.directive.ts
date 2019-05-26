import { Field } from '../../models/field.interface';
import { OnChanges, OnInit, Input, ComponentRef, Directive, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';



const components: {[type: string]: Type<Field>} = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent
  };

@Directive({
    selector: '[dynamicField]'
 })
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
 
  
    @Input()
    config: FieldConfig;
  
    @Input()
    group: FormGroup;

    component: ComponentRef<Field>;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
      ) {}

    
    ngOnChanges() {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
          }
    }
    ngOnInit() {
        if (!components[this.config.type]) {
          const supportedTypes = Object.keys(components).join(', ');
          throw new Error(
            `Trying to use an unsupported type (${this.config.type}).
            Supported types: ${supportedTypes}`
          );
        }
        const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
      }
}