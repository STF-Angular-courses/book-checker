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
import { ActivatedRoute, Route, Router, RouterEvent, RouterLink } from '@angular/router';
import { NewBookFacade } from '../common/service/facade/new-book.facade';

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
  categories: Observable<CategoryModel[]>;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private formDataService: FormDataService,
    private newBookFacade: NewBookFacade,
    private router: Router,
  ) {
    this.bookForm = formBuilder.group({
      title: new FormControl('Title', [Validators.required]),
      description: new FormControl('Some description', [Validators.required]),
      author_name: new FormControl('', [Validators.required]),
      author_last_name: new FormControl('', [Validators.required]),
      category: new FormControl(2, [Validators.required]),
      pages: new FormControl(124, [Validators.required]),
      screen: new FormControl(null, [Validators.required]),
    });
  }

  async submit() {
    if (!this.bookForm.valid) {
      return;
    }

    const data = this.formDataService.formGroupToFormData(this.bookForm);
    const book = await this.newBookFacade.createBookWithAuthor(data);
    console.log(book);
  }

  ngOnInit(): void {
    this.categories = this.categoryService.list();
  }

  changeImage($event: File) {
    console.log($event);
    this.bookForm.patchValue({
      screen: $event,
    });
  }
}
