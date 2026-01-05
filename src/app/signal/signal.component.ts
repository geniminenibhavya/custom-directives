import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.less']
})
export class SignalComponent {
  constructor(public counter: CounterService) {}

  

}
