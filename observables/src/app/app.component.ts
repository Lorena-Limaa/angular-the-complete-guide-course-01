import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; // Importing Subscription from RxJS

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false; // Property to track user activation status
  private activatedSub: Subscription; // Subscription to handle cleanup

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => { // Subscribing to activation events
      this.userActivated = didActivate; // Updating user activation status
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe(); // Unsubscribing from the subscription to prevent memory leaks
  }
}