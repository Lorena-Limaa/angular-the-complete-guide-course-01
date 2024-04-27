import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    // Constructor method, executed when an instance of the class is created
    constructor() {
        // Randomly setting the serverStatus to 'online' or 'offline' based on a condition
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // Method that returns a string
    getServerStatus() {
        return this.serverStatus;
    }

    // Method that returns a color string based on the serverStatus
    getColor() {
        return this.serverStatus === 'online' ? 'lightgreen' : 'mistyrose';
    }
}