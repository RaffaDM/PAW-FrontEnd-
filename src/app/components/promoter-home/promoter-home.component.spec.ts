import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterHomeComponent } from './promoter-home.component';

describe('PromoterHomeComponent', () => {
  let component: PromoterHomeComponent;
  let fixture: ComponentFixture<PromoterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
