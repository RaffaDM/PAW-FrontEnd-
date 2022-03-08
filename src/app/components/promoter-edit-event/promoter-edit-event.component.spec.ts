import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterEditEventComponent } from './promoter-edit-event.component';

describe('PromoterEditEventComponent', () => {
  let component: PromoterEditEventComponent;
  let fixture: ComponentFixture<PromoterEditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterEditEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
