import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

// Defining the routes for the application
const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Home route

    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, // User details route
    ] },  

    {
      path: 'servers', 
      // canActivate: [AuthGuard], // Uncomment to guard the entire servers route
      canActivateChild: [AuthGuard], // Guards child routes of the servers route
      component: ServersComponent, 
      children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, // Single server route with server data resolved
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }, // Edit server route with canDeactivate guard
    ] },

    // { path: 'not-found', component: PageNotFoundComponent }, // 404 route
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} }, // Error page route

    { path: '**', redirectTo: '/not-found' }, // Wildcard route for unknown paths
];
  

@NgModule({ // NgModule decorator to define a module
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true}),  
      RouterModule.forRoot(appRoutes) // Setting up the router module with the defined routes
        
    ],
    exports: [RouterModule] // Exporting RouterModule to make the configured routes available for use in other modules
})
export class AppRoutingModule { // AppModule class
}

