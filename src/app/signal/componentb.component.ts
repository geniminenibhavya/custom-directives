import { Component, effect } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.less']
})
export class ComponentbComponent {
constructor(public counter: CounterService) {
  effect(()=>{
    console.log('Count changed to:', this.counter.count());
  });
}

}
