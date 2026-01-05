import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-behaviorb',
  templateUrl: './behaviorb.component.html',
  styleUrls: ['./behaviorb.component.less']
})
export class BehaviorbComponent implements OnInit {
  message: string = '';
  constructor(private messageService: MessageService){
  }
  ngOnInit(){
    this.messageService.currentMessage.subscribe(message => this.message = message);
}
}
