import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-chirp-box',
  templateUrl: './chirp-box.component.html',
  styleUrls: ['./chirp-box.component.css']
})
export class ChirpBoxComponent implements OnInit {
  public chirpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  @Input() user: User;

  ngOnInit() {
  }

  createForm() {
    this.chirpForm = this.fb.group({
      text: []
    });
  }

  postChirp() {
    /* TODO: add a new Chirp to the database */
  }

}
