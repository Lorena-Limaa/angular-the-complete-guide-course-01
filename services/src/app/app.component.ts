import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service'; // Import the AccountsService

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = []; // Initialize an array to store accounts data

  constructor(private accountsService: AccountsService) {} // Inject AccountsService into the constructor

  // Method called when the component is initialized
  ngOnInit() {
    // Assign the accounts data from the AccountsService to the local accounts array
    this.accounts = this.accountsService.accounts;
  }
}
