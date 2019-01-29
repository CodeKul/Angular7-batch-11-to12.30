import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComComponent } from './inter-com.component';

describe('InterComComponent', () => {
  let component: InterComComponent;
  let fixture: ComponentFixture<InterComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
