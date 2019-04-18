import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ChirpService } from 'src/app/services/chirp.service';
import { Chirp } from 'src/app/models/chirp';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private userSubscription: Subscription;
  private chirpSubscription: Subscription;

  public allChirps: Chirp[] = [];

  constructor(private userService: UserService, private chirpService: ChirpService, private router: Router) { 
  }

  ngOnInit() {
    // If a user comes back from this subscription, forward them on to the chirp page
    this.userSubscription = this.userService.user$.subscribe( user => {
      if(user) {
        this.router.navigate(['chirp']);
      }
    });

    // Subscribe to ALL chirps in the system and show them on this login page
    this.chirpSubscription = this.chirpService.getAllChirps().subscribe( chirps => this.allChirps = chirps);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.chirpSubscription.unsubscribe();
  }

}
