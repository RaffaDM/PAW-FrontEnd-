import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPromoterComponent } from './admin-edit-promoter.component';

describe('AdminEditPromoterComponent', () => {
  let component: AdminEditPromoterComponent;
  let fixture: ComponentFixture<AdminEditPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
