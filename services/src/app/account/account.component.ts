import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service'; // Import the AccountsService

@Component({
  selector: 'app-account', 
  templateUrl: './account.component.html', 
  styleUrls: ['./account.component.css'] 
})
export class AccountComponent {
  @Input() account: {name: string, status: string}; // Define an input property to receive the account data
  @Input() id: number; // Define an input property to receive the account ID

  constructor(
    private accountsService: AccountsService // Inject AccountsService into the constructor
  ) {} 

  // Method triggered when the user sets the status of an account
  onSetTo(status: string) {
    // Call the updateStatus method of AccountsService to update the status of the account
    this.accountsService.updateStatus(this.id, status);
    // Emit an event to notify subscribers that the status has been updated
    this.accountsService.statusUpdated.emit(status);
  }
}
