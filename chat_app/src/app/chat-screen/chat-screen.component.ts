import { Component, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../interfaces/Chat.interface';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent {
  chatInputValue: string = '';

  chats: Array<Chat> = [
    {
      name: 'Suman Saha',
      chatText: 'Ki re kemon?',
      isMine: false,
    },
    {
      name: 'Suman Saha',
      chatText: 'koi re',
      isMine: false,
    },
    {
      name: 'Udita Chatterjee',
      chatText: 'Bol',
      isMine: true,
    },
  ];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService
      .getNewMessage()
      .subscribe((messageObject: Chat) => this.chats.push(messageObject));
  }

  onChange(ngValue: any) {
    this.chatInputValue = ngValue.viewModel;
  }

  // sendMessage() {
  //   this.chatService.sendMessage({
  //     name: 'Udita Chatterjee',
  //     chatText: this.chatInputValue,
  //     isMine: true,
  //   });
  // }
}
