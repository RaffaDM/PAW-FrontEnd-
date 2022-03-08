import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPromoterComponent } from './menu-promoter.component';

describe('MenuPromoterComponent', () => {
  let component: MenuPromoterComponent;
  let fixture: ComponentFixture<MenuPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
