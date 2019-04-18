import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private userSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) { 
  }

  ngOnInit() {
    // If a user comes back from this subscription, forward them on to the chirp page
    this.userSubscription = this.userService.user$.subscribe( user => {
      if(user) {
        this.router.navigate(['chirp']);
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
