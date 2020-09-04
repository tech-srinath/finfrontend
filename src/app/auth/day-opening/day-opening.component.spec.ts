import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOpeningComponent } from './day-opening.component';

describe('DayOpeningComponent', () => {
  let component: DayOpeningComponent;
  let fixture: ComponentFixture<DayOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
