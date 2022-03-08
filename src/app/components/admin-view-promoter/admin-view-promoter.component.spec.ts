import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPromoterComponent } from './admin-view-promoter.component';

describe('AdminViewPromoterComponent', () => {
  let component: AdminViewPromoterComponent;
  let fixture: ComponentFixture<AdminViewPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
