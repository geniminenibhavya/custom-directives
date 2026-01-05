import { Component } from '@angular/core';
import { CounterState } from './counterState';
import { Store } from '@ngrx/store';

interface AppState {
  user: CounterState;
}

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.less']
})
export class CompBComponent {
  constructor(private store: Store<AppState>) { }
  userName$ = this.store.select((state: AppState) => state.user.userName);
}
