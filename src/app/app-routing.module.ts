import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//auth

import { AuthGuardAdminGuard } from './guards/auth-guard-admin.guard';
//login-register
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//admin
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
//create
import { AdminCreateComponent } from './components/admin-create/admin-create.component'
//promoters
import { AdminPromotersComponent } from './components/admin-promoters/admin-promoters.component';
import { AdminViewPromoterComponent } from './components/admin-view-promoter/admin-view-promoter.component';
import { AdminEditPromoterComponent } from './components/admin-edit-promoter/admin-edit-promoter.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminViewUserComponent } from './components/admin-view-user/admin-view-user.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { AdminChangePassComponent } from './components/admin-change-pass/admin-change-pass.component';
import { PromoterHomeComponent } from './components/promoter-home/promoter-home.component';
import { AuthGuardPromoterGuard } from './guards/auth-guard-promoter.guard';
import { PromoterEventsComponent } from './components/promoter-events/promoter-events.component';
import { PromoterViewEventComponent } from './components/promoter-view-event/promoter-view-event.component';
import { PromoterEditEventComponent } from './components/promoter-edit-event/promoter-edit-event.component';
import { PromoterCreateComponent } from './components/promoter-create/promoter-create.component';
import { PromoterMyEventsComponent } from './components/promoter-my-events/promoter-my-events.component';
import { PromoterProfileComponent } from './components/promoter-profile/promoter-profile.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AuthGuardUserGuard } from './guards/auth-guard-user.guard';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserViewEventComponent } from './components/user-view-event/user-view-event.component';
import { UserMyTicketsComponent } from './components/user-my-tickets/user-my-tickets.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/create', component: AdminCreateComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/promoters', component: AdminPromotersComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/promoter-details/:id', component: AdminViewPromoterComponent, canActivate: [AuthGuardAdminGuard]
  }, 
  {
    path: 'admin/promoter-update/:id', component: AdminEditPromoterComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/users', component: AdminUsersComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/user-details/:id', component: AdminViewUserComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/user-update/:id', component: AdminEditUserComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'admin/change-pass', component: AdminChangePassComponent, canActivate: [AuthGuardAdminGuard]
  },
  {
    path: 'promoter', component: PromoterHomeComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'promoter/events', component: PromoterEventsComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'promoter/event-details/:id', component: PromoterViewEventComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'promoter/event-update/:id', component: PromoterEditEventComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'promoter/create', component: PromoterCreateComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'promoter/myEvents', component: PromoterMyEventsComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'promoter/profile', component: PromoterProfileComponent, canActivate: [AuthGuardPromoterGuard]
  },
  {
    path: 'user', component: UserHomeComponent, canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'user/events', component: UserEventsComponent, canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'user/event-details/:id', component: UserViewEventComponent, canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'user/tickets', component: UserMyTicketsComponent, canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'user/profile', component: UserProfileComponent, canActivate: [AuthGuardUserGuard]
  },
  {
    path: 'user/aboutUs', component: AboutUsComponent, canActivate: [AuthGuardUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
