import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { Chat } from './interfaces/Chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public messageObject$: BehaviorSubject<Chat> = new BehaviorSubject({
    name: '',
    chatText: '',
    isMine: false,
  });
  constructor() {}

  socket = io('http://localhost:5000');

  public sendMessage(messageObject: Chat) {
    this.socket.emit('chat', messageObject);
  }

  public getNewMessage = () => {
    this.socket.on('chat', (messageObject) => {
      this.messageObject$.next(messageObject);
    });

    return this.messageObject$.asObservable();
  };
}
