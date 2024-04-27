import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ // Defining an array of route objects
  { path: '', component: HomeComponent }, // Route for the root URL ('/') to HomeComponent
  { path: 'user/:id', component: UserComponent } // Route for '/user/:id' to UserComponent with dynamic id parameter
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Configuring RouterModule with the defined routes using forRoot method
  ],
  exports: [
    RouterModule // Exporting RouterModule to make it available to other modules in the application
  ]
})
export class AppRoutingModule {
}
