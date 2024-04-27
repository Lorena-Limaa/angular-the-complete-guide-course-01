import { Injectable } from "@angular/core";

// Define a class called LoggingService
@Injectable({providedIn: 'root'})
export class LoggingService {
    // Define a method called logStatusChange which takes a string parameter called status
    logStatusChange(status: string) {
        // Log a message to the console indicating that a server status changed, along with the new status
        console.log('A server status changed, new status: ' + status);
    }    
}
