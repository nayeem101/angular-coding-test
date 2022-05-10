import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MaterialModule,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
