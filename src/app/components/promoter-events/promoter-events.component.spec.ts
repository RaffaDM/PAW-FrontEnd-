import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterEventsComponent } from './promoter-events.component';

describe('PromoterEventsComponent', () => {
  let component: PromoterEventsComponent;
  let fixture: ComponentFixture<PromoterEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
