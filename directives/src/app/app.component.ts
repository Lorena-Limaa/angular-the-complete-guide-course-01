import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];

  // Array of odd numbers
  oddNumbers = [1, 3, 5];

  // Array of even numbers
  evenNumbers = [2, 4, 6];

  // Boolean flag to determine wheter to show only odd numbers
  onlyOdd = false;

  // Default value for the ngSwitch directive
  value = 'default';
}
