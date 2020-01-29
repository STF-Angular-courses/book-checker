import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FullBookModel } from '../common/model/full-book.model';
import { Observable } from 'rxjs';
import { AuthorModel } from '../../author/common/model/author.model';
import { CategoryModel } from '../../category/common/model/category.model';
import { CategoryService } from '../../category/common/service/category.service';
import { AuthorService } from '../../author/common/service/author.service';
import { FormDataService } from '../../form-data/common/service/form-data.service';
import { BookContract } from '../common/service/book/book.contract';
import { ValidationException } from '../common/exception/validation.exception';

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
    private formDataService: FormDataService,
    private bookService: BookContract,
  ) {
    this.bookForm = formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      author: new FormControl(undefined, [Validators.required]),
      category: new FormControl(undefined, [Validators.required]),
      pages: new FormControl(0, [Validators.required]),
      screen: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    if (!this.bookForm.valid) {
      return;
    }

    const data = this.formDataService.formGroupToFormData(this.bookForm);

    const result = this.bookService.add(data);
    result.subscribe(
      (response) => console.log(response),
      err => {
        if (err instanceof ValidationException) {
          console.log('some action', err.getErrors().length);
          return;
        }

        console.log('some other action');
      }
    );
  }

  ngOnInit(): void {
    this.authors = this.authorService.list();
    this.categories = this.categoryService.list();
  }

  changeImage($event: File) {
    console.log($event)
    this.bookForm.patchValue({
      screen: $event,
    });
  }
}
