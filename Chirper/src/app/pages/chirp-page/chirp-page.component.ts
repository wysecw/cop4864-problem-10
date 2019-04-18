import { Component, OnInit } from '@angular/core';
import { Chirp } from 'src/app/models/chirp';
import { ChirpService } from 'src/app/services/chirp.service';
import { UserService } from 'src/app/services/user.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chirp-page',
  templateUrl: './chirp-page.component.html',
  styleUrls: ['./chirp-page.component.css']
})
export class ChirpPageComponent implements OnInit {

  public chirps: Chirp[];

  constructor(private chirpService: ChirpService, private userService: UserService) { }

  ngOnInit() {
    // Get the user who is logged in, then get that person's chirps
    this.userService.user$.subscribe( user => {
      // Will subscribe to changes in the database and map each result set to a new
      // array of chirp objects
      this.chirpService.getChirps(user.uid).subscribe( chirps => {
        this.chirps = chirps.map( chirpObj => new Chirp(chirpObj) )
      })
    });
  }

}
