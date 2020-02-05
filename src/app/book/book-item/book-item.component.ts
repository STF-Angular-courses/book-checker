import { AfterViewInit, Component, ElementRef, EventEmitter, Host, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BookModel } from '../common/model/book.model';
import { BookContract } from '../common/service/book/book.contract';
import { AuthorService } from '../../author/common/service/author.service';
import { AuthorModel } from '../../author/common/model/author.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
})
export class BookItemComponent implements OnInit, AfterViewInit {
  constructor(
    private bookService: BookContract,
    private authorService: AuthorService,
  ) {}

  @Input() book: BookModel;
  author: Observable<AuthorModel>;

  @ViewChild('card', { static: false })
  private cardElement: ElementRef;

  ngOnInit(): void {
    this.author = this.authorService.get(this.book.author_id);
  }

  removeBook(id: number) {
    this.bookService.remove(id).subscribe(() => console.log('deleted'));
  }

  ngAfterViewInit(): void {
    this.cardElement.nativeElement.style.width = '100px';
    this.cardElement.nativeElement.style.height = '100px';
    this.cardElement.nativeElement.style.backgroundColor = '#aa0000';

    this.cardElement.nativeElement.onmouseenter = () => {
      this.cardElement.nativeElement.style.backgroundColor = '#00aa00';
    };

    this.cardElement.nativeElement.onmouseleave = () => {
      this.cardElement.nativeElement.style.backgroundColor = '#0000aa';
    };
  }
}
