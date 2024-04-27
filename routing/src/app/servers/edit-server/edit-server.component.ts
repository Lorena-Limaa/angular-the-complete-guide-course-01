import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Importing the ServersService and CanComponentDeactivate interface
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  // Declaring variables to hold server data and input values
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false; // Flag to determine if editing is allowed
  changesSaved = false;

  // Constructor with injection of services
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Initialization method
  ngOnInit() {
    // Retrieving query parameters and fragment from the route
    console.log(this.route.snapshot.queryParams); // Logging query parameters
    console.log(this.route.snapshot.fragment); // Logging fragment

    // Subscribing to query parameters changes
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          // Setting the allowEdit flag based on the value of 'allowEdit' query parameter
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.route.fragment.subscribe(); // Subscribing to fragment changes

    // Retrieving server data from the route parameters
    const id = +this.route.snapshot.params['id'];
    this.route.params
        .subscribe(
          (params: Params) => {
            this.server = this.serversService.getServer(+params['id']);
          }
        );

    // Retrieving server data from the ServersService and initializing input values
    this.server = this.serversService.getServer(id); // Getting server data by ID
    this.serverName = this.server.name; // Initializing serverName with server name
    this.serverStatus = this.server.status; // Initializing serverStatus with server status
  }

  // Method triggered when the "Update Server" button is clicked
  onUpdateServer() {
    // Calling the updateServer method from ServersService to update server information
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // Method to check if component can be deactivated
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // If editing not allowed, allow deactivation
    if(!this.allowEdit) {
      return true;
    }
    // If changes made and not saved, confirm with user before deactivation
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      // If no changes made, allow deactivation
      return true;
    }
  }
}
