import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChirpBoxComponent } from './components/chirp-box/chirp-box.component';
import { ChirpListComponent } from './components/chirp-list/chirp-list.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ReactiveFormsModule } from "@angular/forms";

// Pages
import { ChirpPageComponent } from './pages/chirp-page/chirp-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ChirpBoxComponent,
    ChirpListComponent,
    WelcomeHeaderComponent,
    ChirpPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
