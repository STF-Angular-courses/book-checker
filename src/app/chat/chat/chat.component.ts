import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../common/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  chatForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private chatService: ChatService,
  ) {
    this.chatForm = this.formBuilder.group({
      message: new FormControl('', [Validators.required]),
    });
  }

  sendMessage() {
    if (!this.chatForm.valid) {
      return;
    }

    this.chatService.sendMessage(this.chatForm.value.message);
  }
}
