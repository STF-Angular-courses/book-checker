import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {
  messages: string[] = [];

  constructor(
    private socket: Socket,
  ) {
    this.socket.on('chat message', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage(text: string) {
    console.log('chat message', text);
    this.socket.emit('chat message', text);
  }
}
