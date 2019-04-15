import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ChirpPageComponent } from './pages/chirp-page/chirp-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'chirp', component: ChirpPageComponent },
  { path: '**', redirectTo: '/sign-up' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
