import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module'; // Importing AppRoutingModule for routing configuration
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [ // Declaration of all components used in the module
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [ // Importing external modules required for the application
    BrowserModule, // BrowserModule for running the application in a browser
    FormsModule, // FormsModule for two-way data binding
    AppRoutingModule // AppRoutingModule for routing configuration
  ],
  providers: [ // Providers array for providing services throughout the application
    ServersService, // Providing the ServersService so it can be injected into components
    AuthService, // Providing AuthService for authentication functionalities
    AuthGuard, // Providing AuthGuard for guarding routes based on authentication
    CanDeactivateGuard, // Providing CanDeactivateGuard for guarding route deactivation
    ServerResolver // Providing ServerResolver for resolving data before activating a route
  ],
  bootstrap: [AppComponent] // Bootstraping the AppComponent as the root component of the application
})
export class AppModule { } // AppModule class that represents the root module of the application
