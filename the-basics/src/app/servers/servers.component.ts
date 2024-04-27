import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // After 2 seconds the property "allowNewServer" will be switched to true
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  // This method will change the "serverCreationStatus" property
  onCreateServer() {
    this.serverCreated = true;
    // Adding the value of 'this.serverName' to the 'servers' array
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
