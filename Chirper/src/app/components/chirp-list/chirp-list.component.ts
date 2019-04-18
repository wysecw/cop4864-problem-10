import { Component, OnInit, Input } from '@angular/core';
import { Chirp } from 'src/app/models/chirp';

@Component({
  selector: 'app-chirp-list',
  templateUrl: './chirp-list.component.html',
  styleUrls: ['./chirp-list.component.css']
})
export class ChirpListComponent implements OnInit {
  @Input() chirpList: Chirp[];

  constructor() { }

  ngOnInit() {
  }

}
