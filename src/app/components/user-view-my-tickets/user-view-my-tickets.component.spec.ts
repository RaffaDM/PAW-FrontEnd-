import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewMyTicketsComponent } from './user-view-my-tickets.component';

describe('UserViewMyTicketsComponent', () => {
  let component: UserViewMyTicketsComponent;
  let fixture: ComponentFixture<UserViewMyTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewMyTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewMyTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
