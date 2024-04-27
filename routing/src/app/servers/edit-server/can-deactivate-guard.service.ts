// Importing necessary modules from Angular router
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";

// Importing Observable from rxjs library
import { Observable } from "rxjs";

// Exporting interface for component deactivation
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
 
// Implementing CanDeactivateGuard to handle component deactivation
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    // Method to check if component can be deactivated
    canDeactivate(
        component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
