import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './common/service/category.service';

@NgModule({
  providers: [
    CategoryService,
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
