import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthIntercepterInterceptor } from './interceptors/auth-interceptor.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminPromotersComponent } from './components/admin-promoters/admin-promoters.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminViewPromoterComponent } from './components/admin-view-promoter/admin-view-promoter.component';
import { AdminEditPromoterComponent } from './components/admin-edit-promoter/admin-edit-promoter.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminViewUserComponent } from './components/admin-view-user/admin-view-user.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { AdminChangePassComponent } from './components/admin-change-pass/admin-change-pass.component';
import { PromoterHomeComponent } from './components/promoter-home/promoter-home.component';
import { MenuPromoterComponent } from './components/menu-promoter/menu-promoter.component';
import { PromoterEventsComponent } from './components/promoter-events/promoter-events.component';
import { PromoterViewEventComponent } from './components/promoter-view-event/promoter-view-event.component';
import { PromoterEditEventComponent } from './components/promoter-edit-event/promoter-edit-event.component';
import { PromoterCreateComponent } from './components/promoter-create/promoter-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular materials
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PromoterMyEventsComponent } from './components/promoter-my-events/promoter-my-events.component';
import { PromoterProfileComponent } from './components/promoter-profile/promoter-profile.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserViewEventComponent } from './components/user-view-event/user-view-event.component';
import { UserMyTicketsComponent } from './components/user-my-tickets/user-my-tickets.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { PromoterViewMyEventsComponent } from './components/promoter-view-my-events/promoter-view-my-events.component';
import { UserViewMyTicketsComponent } from './components/user-view-my-tickets/user-view-my-tickets.component';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    MenuAdminComponent,
    AdminHomeComponent,
    AdminPromotersComponent,
    AdminCreateComponent,
    AdminViewPromoterComponent,
    AdminEditPromoterComponent,
    AdminUsersComponent,
    AdminViewUserComponent,
    AdminEditUserComponent,
    AdminChangePassComponent,
    PromoterHomeComponent,
    MenuPromoterComponent,
    PromoterEventsComponent,
    PromoterViewEventComponent,
    PromoterEditEventComponent,
    PromoterCreateComponent,
    PromoterMyEventsComponent,
    PromoterProfileComponent,
    MenuUserComponent,
    UserHomeComponent,
    UserEventsComponent,
    UserViewEventComponent,
    UserMyTicketsComponent,
    UserProfileComponent,
    AboutUsComponent,
    PromoterViewMyEventsComponent,
    UserViewMyTicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FullCalendarModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
