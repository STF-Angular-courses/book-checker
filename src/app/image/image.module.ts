import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerImagePipe } from './common/pipe/server-image.pipe';
import { PreviewUploaderComponent } from './preview-uploader/preview-uploader.component';
import { MatCardModule } from '@angular/material';
import { ImageService } from './common/service/image.service';

@NgModule({
  declarations: [
    ServerImagePipe,
    PreviewUploaderComponent,
  ],
  providers: [
    ImageService,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    ServerImagePipe,
    PreviewUploaderComponent,
  ]
})
export class ImageModule { }
