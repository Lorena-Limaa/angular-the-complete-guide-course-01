import { Component, OnDestroy, OnInit } from '@angular/core'; // Importing Component, OnDestroy, and OnInit from Angular core

import { interval, Subscription, Observable } from 'rxjs'; // Importing Subscription and interval from RxJS
import { map, filter } from 'rxjs/operators'; // Importing map and filter operators from RxJS operators

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy { // HomeComponent class implementing OnInit and OnDestroy interfaces

  private firstObsSubscription: Subscription; // Private property to store the subscription

  constructor() {
  }

  ngOnInit() { // OnInit lifecycle hook
    // this.firstObsSubscription = interval(1000).subscribe(count => { // Starting an observable timer with interval of 1000 ms
    //  console.log(count); // Logging the count emitted by the timer
    // });

    const customIntervalObservable = new Observable<number>(observer => { // Creating a custom observable
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count); // Emitting the current count
        if (count === 5) {
          observer.complete(); // Completing the observable when count reaches 5
        }
        if (count > 3) {
          observer.error(new Error ('Count is greater 3!')); // Emitting an error when count is greater than 3
        }
        count++;
      }, 1000);

      // Cleanup logic when the observer unsubscribes
      return () => {
        clearInterval(intervalId); // Clearing the interval
      };
    });

    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => { // Using pipe to apply operators to the observable
      return data > 0; // Filtering out values less than or equal to 0
    }), map(data => { // Mapping emitted values to a new format
      return 'Round: ' + (data + 1);
    })).subscribe(data => { // Subscribing to the modified observable
      console.log(data); // Logging the modified emitted data
    }, error => { // Error handler
      console.log(error); // Logging the error
      alert(error.message); // Showing an alert with the error message
    }, () => { // Completion handler
      console.log('Completed!'); // Logging completion
    });
  }

  ngOnDestroy() { // OnDestroy lifecycle hook
    this.firstObsSubscription.unsubscribe(); // Unsubscribing from the observable to prevent memory leaks
  }

}
