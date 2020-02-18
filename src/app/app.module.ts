import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookModule } from './book/book.module';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './routing/app-routing.module';
import { MatchComponent } from './match.component';
import { SocketIoModule } from 'ngx-socket-io';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    BookModule,
    ChatModule,
    AppRoutingModule,
    SocketIoModule.forRoot({ url: 'http://localhost:3000' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
