import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FullBookModel } from '../common/model/full-book.model';
import { BookContract } from '../common/service/book/book.contract';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../../author/common/service/author.service';
import { CategoryService } from '../../category/common/service/category.service';
import { AuthorModel } from '../../author/common/model/author.model';
import { CategoryModel } from '../../category/common/model/category.model';
import { ValidationException } from '../common/exception/validation.exception';
import { FormDataService } from '../../form-data/common/service/form-data.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.scss' ],
})
export class BookEditComponent implements OnInit {
  book?: Observable<FullBookModel>;
  bookId: number;
  bookForm: FormGroup;
  private authors: Observable<AuthorModel[]>;
  private categories: Observable<CategoryModel[]>;

  constructor(
    private bookService: BookContract,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private formDataService: FormDataService,
  ) {
    this.bookForm = formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      author: new FormControl(undefined, [Validators.required]),
      category: new FormControl(undefined, [Validators.required]),
      pages: new FormControl(0, [Validators.required]),
      screen: new FormControl(null),
    });
  }

  submit() {
    if (!this.bookForm.valid) {
      return;
    }

    const data = this.formDataService.formGroupToFormData(this.bookForm);

    const result = this.bookService.update(this.bookId, data);
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
    this.route.paramMap.subscribe((params) => {
      const id: number = parseInt(params.get('id'), 10);

      this.book = this.bookService.get(id);
      this.authors = this.authorService.list();
      this.categories = this.categoryService.list();

      this.book.subscribe((book) => {
        this.bookId = book.id;

        this.bookForm.patchValue({
          title: book.title,
          description: book.description,
          category: book.category,
          pages: book.pages,
        });

        book.author.subscribe(author => {
          this.bookForm.patchValue({
            author: author.id,
          });
        });

        book.category.subscribe(category => {
          this.bookForm.patchValue({
            category: category.id,
          });
        });
      });
    });
  }

  async changeImage($event: File) {
    this.bookForm.patchValue({
      screen: $event,
    });
  }
}
