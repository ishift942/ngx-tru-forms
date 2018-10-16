import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaExamplesComponent } from './json-schema-examples.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormModule, JsonFormBootstrap4Module, JsonFormMaterialModule, JsonFormMaterial, JsonFormBootstrap4 } from '@trufla/ngx-tru-forms';
import { JsonSchemaExamplesSamples } from './json-schema-examples.samples';
import { InputColourComponent } from './input-colour/input-colour.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonFormBootstrap4Module,
    JsonFormMaterialModule,
    JsonFormModule.forRoot(JsonFormBootstrap4Module),
    ColorPickerModule,
  ],
  declarations: [
    JsonSchemaExamplesComponent,
    InputColourComponent
  ],
  providers: [
    JsonSchemaExamplesSamples,
    JsonFormMaterial,
    JsonFormBootstrap4
  ],
  exports: [
    JsonSchemaExamplesComponent
  ],
  entryComponents: [
    InputColourComponent
  ]
})
export class JsonSchemaExamplesModule { }
