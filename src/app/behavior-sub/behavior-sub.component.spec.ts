import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubComponent } from './behavior-sub.component';

describe('BehaviorSubComponent', () => {
  let component: BehaviorSubComponent;
  let fixture: ComponentFixture<BehaviorSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorSubComponent]
    });
    fixture = TestBed.createComponent(BehaviorSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
