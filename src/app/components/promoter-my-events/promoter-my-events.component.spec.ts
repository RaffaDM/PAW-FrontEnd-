import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterMyEventsComponent } from './promoter-my-events.component';

describe('PromoterMyEventsComponent', () => {
  let component: PromoterMyEventsComponent;
  let fixture: ComponentFixture<PromoterMyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterMyEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
