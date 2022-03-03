import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './pages/view/dashboard.component';
import { LoginComponent } from './pages/view/login.component';
import { AppFooterComponent } from './app.footer.component';
import { AppTopbarComponent } from './app.topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    DashboardComponent,
    LoginComponent,
    AppFooterComponent,
    AppTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
