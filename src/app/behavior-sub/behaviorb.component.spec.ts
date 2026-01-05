import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorbComponent } from './behaviorb.component';

describe('BehaviorbComponent', () => {
  let component: BehaviorbComponent;
  let fixture: ComponentFixture<BehaviorbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorbComponent]
    });
    fixture = TestBed.createComponent(BehaviorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
