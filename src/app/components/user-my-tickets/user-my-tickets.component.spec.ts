import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyTicketsComponent } from './user-my-tickets.component';

describe('UserMyTicketsComponent', () => {
  let component: UserMyTicketsComponent;
  let fixture: ComponentFixture<UserMyTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
