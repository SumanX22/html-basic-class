import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ChatScreenComponent, ChatBubbleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
