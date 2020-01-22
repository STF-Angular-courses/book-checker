import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerImagePipe } from './common/pipe/server-image.pipe';

@NgModule({
  declarations: [
    ServerImagePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ServerImagePipe,
  ]
})
export class ImageModule { }
