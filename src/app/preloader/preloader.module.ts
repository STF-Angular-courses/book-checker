import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { PreloaderDirective } from './directive/preloader.directive';

@NgModule({
  declarations: [
    PreloaderComponent,
    PreloaderDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PreloaderDirective,
  ],
  entryComponents: [
    PreloaderComponent,
  ],
})
export class PreloaderModule { }
