import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initializing serverElements array
  serverElements = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) { // Method to handle the addition of a new server
    this.serverElements.push({ // Push the new server element to the serverElements array
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) { // Method to handle the addition of a new blueprint
    this.serverElements.push({ // Push the new blueprint element to the serverElements array
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
