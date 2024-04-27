import { 
    ActivatedRouteSnapshot, // Provides access to information about a route associated with a component loaded in an outlet
    CanActivate, // Interface to be implemented by a class to determine if a route can be activated
    CanActivateChild, // Interface to be implemented by a class to determine if a child route can be activated
    Router, // Service for navigation between views defined by routes
    RouterStateSnapshot, // Provides access to information about the route snapshot that the router state holds at the moment of the request
} from "@angular/router"; // Importing necessary router functionalities

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild { // Implements CanActivate and CanActivateChild interfaces for guarding routes
    constructor(private authService: AuthService, private router: Router) {} // Constructor injecting AuthService and Router services

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Method to determine if a route can be activated
        return this.authService.isAuthenticated() // Calling isAuthenticated method from AuthService
            .then(
                (authenticated: boolean) => { // Handling the promise resolution
                    if (authenticated) { // If user is authenticated
                        return true; // Allow navigation
                    } else { // If user is not authenticated
                        this.router.navigate(['/']); // Redirect to home page
                    }
                }
            );                        
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Method to determine if a child route can be activated
        return this.canActivate(route, state); // Delegates to canActivate method for simplicity
    }
}
