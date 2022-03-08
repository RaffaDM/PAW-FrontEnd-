import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotersComponent } from './admin-promoters.component';

describe('AdminPromotersComponent', () => {
  let component: AdminPromotersComponent;
  let fixture: ComponentFixture<AdminPromotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPromotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPromotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
