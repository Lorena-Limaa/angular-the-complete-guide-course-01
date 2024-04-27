import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string}; // Declaring server object

  // Constructor with injection of services and route
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Subscribing to route data changes to get resolved server data
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server']; // Assigning resolved server data to the server object
        }
      );

    // // Getting server ID from route parameters using snapshot
    // const id = +this.route.snapshot.params['id'];
    // // Retrieving server data based on ID
    // this.server = this.serversService.getServer(id);

    // // Subscribing to route parameter changes using params observable
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       // Updating server data when route parameters change
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
  }

  // Method triggered when the "Edit Server" button is clicked
  onEdit() {
    // Navigating to the edit server route relative to the current route
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
