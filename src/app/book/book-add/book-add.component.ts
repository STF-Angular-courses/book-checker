import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FullBookModel } from '../common/model/full-book.model';
import { Observable } from 'rxjs';
import { AuthorModel } from '../../author/common/model/author.model';
import { CategoryModel } from '../../category/common/model/category.model';
import { CategoryService } from '../../category/common/service/category.service';
import { AuthorService } from '../../author/common/service/author.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: [
    './book-add.component.scss',
  ],
})
export class BookAddComponent implements OnInit {
  bookForm!: FormGroup;
  book: FullBookModel;
  authors: Observable<AuthorModel[]>;
  categories: Observable<CategoryModel[]>;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private authorService: AuthorService,
  ) {
    this.bookForm = formBuilder.group({
      title: '',
      description: '',
      author: null,
      pages: 0,
      screen: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    console.log(this.bookForm.value);
  }

  ngOnInit(): void {
    this.authors = this.authorService.list();
    this.categories = this.categoryService.list();
  }
}
