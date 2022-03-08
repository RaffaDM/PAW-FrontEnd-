import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterViewMyEventsComponent } from './promoter-view-my-events.component';

describe('PromoterViewMyEventsComponent', () => {
  let component: PromoterViewMyEventsComponent;
  let fixture: ComponentFixture<PromoterViewMyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterViewMyEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterViewMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
