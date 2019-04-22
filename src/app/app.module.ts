import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatButtonModule, MatProgressBarModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatCardModule, MatBadgeModule, MatListModule, MatDividerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatListModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
