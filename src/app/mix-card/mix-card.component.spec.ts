import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixCardComponent } from './mix-card.component';

describe('MixCardComponent', () => {
  let component: MixCardComponent;
  let fixture: ComponentFixture<MixCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
