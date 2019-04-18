import { Injectable } from '@angular/core';
import { Chirp } from '../models/chirp';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChirpService {

  constructor(private afs: AngularFirestore, private userService: UserService) { }

  /**
   * Takes in a username and returns an observable stream for that user's chirps
   * @param uid The username of the person
   * @returns An observable of object arrays
   */
  public getChirps(uid: string): Observable<{}[]> {
    return this.afs
      .collection('chirps', ref => ref.where('uid', '==', uid))
      .valueChanges();
  }

  /**
   * Posts a new chirp to the database
   * @param chirp The chirp object we want to save
   */
  public postChirp(chirp: Chirp): void {
    this.afs.collection('chirps').add({ // Break down the chirp to a JS object to save
      user:  chirp.user,
      time: chirp.time,
      text: chirp.text
    });
  }
}
