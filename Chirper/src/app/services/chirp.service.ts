import { Injectable } from '@angular/core';
import { Chirp } from '../models/chirp';

@Injectable({
  providedIn: 'root'
})
export class ChirpService {

  constructor() { }

  getChirps(username) {
    return [
      new Chirp("efridge", "testing 1,2,3", new Date()),
      new Chirp("efridge", "testing 4,5,6", new Date())
    ];
  }
}
