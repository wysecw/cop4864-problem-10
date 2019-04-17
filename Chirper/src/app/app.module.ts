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
import { LoginPageComponent } from './pages/login-page/login-page.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ChirpBoxComponent,
    ChirpListComponent,
    WelcomeHeaderComponent,
    ChirpPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
