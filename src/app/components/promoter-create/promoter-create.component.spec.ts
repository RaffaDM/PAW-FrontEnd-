import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterCreateComponent } from './promoter-create.component';

describe('PromoterCreateComponent', () => {
  let component: PromoterCreateComponent;
  let fixture: ComponentFixture<PromoterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
