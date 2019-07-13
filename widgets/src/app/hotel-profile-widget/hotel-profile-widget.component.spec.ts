import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelProfileWidgetComponent } from './hotel-profile-widget.component';

describe('HotelProfileWidgetComponent', () => {
  let component: HotelProfileWidgetComponent;
  let fixture: ComponentFixture<HotelProfileWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelProfileWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
