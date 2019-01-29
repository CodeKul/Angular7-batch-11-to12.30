import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFirstComponent } from './small-first.component';

describe('SmallFirstComponent', () => {
  let component: SmallFirstComponent;
  let fixture: ComponentFixture<SmallFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
