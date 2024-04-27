import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service'; // Import the AccountsService

@Component({
  selector: 'app-new-account', 
  templateUrl: './new-account.component.html', 
  styleUrls: ['./new-account.component.css'] 
})
export class NewAccountComponent {
  constructor(
    private accountsService: AccountsService // Inject AccountsService into the constructor
  ) {
    // Subscribe to the statusUpdated EventEmitter of AccountsService to receive status update notifications
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status) // Alert a message when a new status is emitted
    );
  } 

  // Method triggered when the user creates a new account
  onCreateAccount(accountName: string, accountStatus: string) { 
    // Call the addAccount method of AccountsService to add a new account
    this.accountsService.addAccount(accountName, accountStatus);   
  }
}
