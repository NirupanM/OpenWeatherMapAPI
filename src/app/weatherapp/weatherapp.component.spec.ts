import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherappComponent } from './weatherapp.component';

describe('WeatherappComponent', () => {
  let component: WeatherappComponent;
  let fixture: ComponentFixture<WeatherappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
