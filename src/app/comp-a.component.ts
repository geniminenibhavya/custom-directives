import { Component } from '@angular/core';
import { setUserName } from './create-action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.less']
})
export class CompAComponent {
  constructor(private store: Store){}

  updateName(newName: string){
    this.store.dispatch(setUserName({userName: newName}));
  }
}
