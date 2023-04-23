import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent {
  chatInput = 'Hello';

  chats = [
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

  sendMessage() {
    this.chats.push({
      name: 'Udita Chatterjee',
      chatText: this.chatInput,
      isMine: true,
    });
  }
}
