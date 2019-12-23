import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Pipe } from './common/pipe/base64.pipe';

@NgModule({
  declarations: [
    Base64Pipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Base64Pipe,
  ]
})
export class ImageModule { }
