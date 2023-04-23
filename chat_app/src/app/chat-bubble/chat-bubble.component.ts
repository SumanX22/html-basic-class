import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent {
  @Input() name: String = '';
  @Input() chatText: String = '';
  @Input() isMine: Boolean = false;
}
