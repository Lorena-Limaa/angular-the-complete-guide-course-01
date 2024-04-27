import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service'; 
import { ActivatedRoute, Router } from '@angular/router'; // Importing ActivatedRoute and Router

@Component({
  selector: 'app-servers', 
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  // Declaring an array to hold server data
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService, 
    private router: Router, // Injecting Router for navigation
    private route: ActivatedRoute // Injecting ActivatedRoute for getting route information
  ) { }

  ngOnInit() {
    // Lifecycle hook called after component initialization
    // Retrieving server data by calling the getServers method from the ServersService
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // Method triggered when the "Reload Page" button is clicked
    // Navigates to the current '/servers' route, effectively reloading the page
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
