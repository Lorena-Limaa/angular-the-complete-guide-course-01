import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // Importing ActivatedRoute for getting route information
import { Subscription } from 'rxjs'; // Importing Subscription for managing subscriptions

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string }; // Declaring a property 'user' with type object having 'id' and 'name' properties
  paramsSubscription: Subscription; // Subscription to manage the route parameter changes

  constructor(private route: ActivatedRoute) {} // Injecting ActivatedRoute into the component

  ngOnInit() {
    // Lifecycle hook called after component initialization
    // Retrieving route parameters to get the ID and name of the user from the URL
    // Using 'snapshot' to get the current route information
    this.user = {
      id: this.route.snapshot.params['id'], // Getting the ID parameter from the URL
      name: this.route.snapshot.params['name'] // Getting the name parameter from the URL
    };

    // Subscribing to route parameter changes using params observable
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          // Updating user object with new parameter values when route parameters change
          this.user.id = params['id']; // Updating ID
          this.user.name = params['name']; // Updating name
        }
      );
  }

  ngOnDestroy() {
    // Lifecycle hook called before component destruction
    // Unsubscribing from the route parameter changes to prevent memory leaks
    this.paramsSubscription.unsubscribe();
  }
}
