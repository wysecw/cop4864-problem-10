import { Component, OnInit } from '@angular/core';
import { Chirp } from 'src/app/models/chirp';
import { User } from 'src/app/models/user';
import { ChirpService } from 'src/app/services/chirp.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chirp-page',
  templateUrl: './chirp-page.component.html',
  styleUrls: ['./chirp-page.component.css']
})
export class ChirpPageComponent implements OnInit {

  public loggedInUser: User;
  public chirps: Chirp[];

  constructor(chirpService: ChirpService) { 
    this.loggedInUser = UserService.getUser();
    this.chirps = chirpService.getChirps(this.loggedInUser.username);
  }

  ngOnInit() {
  }

}
