import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentbComponent } from './componentb.component';

describe('ComponentbComponent', () => {
  let component: ComponentbComponent;
  let fixture: ComponentFixture<ComponentbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentbComponent]
    });
    fixture = TestBed.createComponent(ComponentbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
