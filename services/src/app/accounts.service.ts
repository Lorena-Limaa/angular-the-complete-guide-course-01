import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service"; // Import the LoggingService

// Define a class called AccountsService
@Injectable({providedIn: 'root'}) // Decorate the class with @Injectable() to indicate that it can be injected with dependencies
export class AccountsService {
    // Initialize an array of accounts with some initial data
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>(); // Define an EventEmitter to emit status updates

    constructor(private loggingService: LoggingService){} // Inject LoggingService into the constructor

    // Method to add a new account to the accounts array
    addAccount(name: string, status: string) {
        // Push a new account object with provided name and status into the accounts array
        this.accounts.push({name: name, status: status});
        // Log the status change using the LoggingService
        this.loggingService.logStatusChange(status);
    }

    // Method to update the status of an account based on its id
    updateStatus(id: number, status: string) {
        // Update the status of the account at the specified index in the accounts array
        this.accounts[id].status = status;
        // Log the status change using the LoggingService
        this.loggingService.logStatusChange(status);
        // Emit an event to notify subscribers that the status has been updated
        this.statusUpdated.emit(status);
    }
}
