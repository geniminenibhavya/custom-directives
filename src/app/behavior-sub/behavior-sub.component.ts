import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-behavior-sub',
  templateUrl: './behavior-sub.component.html',
  styleUrls: ['./behavior-sub.component.less']
})
export class BehaviorSubComponent {
  newMessage : string = 'flown from Component A';
  constructor(private messageService: MessageService){}

  sendMessage(){
    this.messageService.changeMessage(this.newMessage)
  }
}
