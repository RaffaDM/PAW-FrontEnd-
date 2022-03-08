import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterViewEventComponent } from './promoter-view-event.component';

describe('PromoterViewEventComponent', () => {
  let component: PromoterViewEventComponent;
  let fixture: ComponentFixture<PromoterViewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterViewEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
