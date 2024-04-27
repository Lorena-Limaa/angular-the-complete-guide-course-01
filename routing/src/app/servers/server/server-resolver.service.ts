// Importing necessary modules from Angular router
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

// Importing Observable from rxjs library
import { Observable } from 'rxjs';

// Importing Injectable decorator from Angular core
import { Injectable } from '@angular/core';

// Importing ServersService for retrieving server data
import { ServersService } from '../servers.service';

// Interface to define the structure of a server
interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable() // Injectable decorator to indicate that this service can be injected into other components or services
export class ServerResolver implements Resolve<Server> { // Implementing Resolve interface to resolve data before activating a route
    constructor(private serversService: ServersService) {} // Constructor with injection of ServersService

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        // Resolving server data by ID using ServersService
        return this.serversService.getServer(+route.params['id']);
    }
}
