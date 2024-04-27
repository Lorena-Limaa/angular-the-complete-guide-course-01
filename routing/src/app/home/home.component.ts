// Importing necessary modules from Angular framework
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importing Router for navigation
import { AuthService } from '../auth.service'; // Importing AuthService for authentication

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router, // Injecting Router into the component
    private authService: AuthService // Injecting AuthService into the component
  ) { } 

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // Method triggered when the "Load Server" button is clicked
    // Navigates to the '/servers/:id/edit' route with query parameters and fragment
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' }, // Query parameters to allow editing
      fragment: 'loading' // Fragment for scrolling to a specific element
    });
  }

  onLogin() {
    // Method triggered when the "Login" button is clicked
    this.authService.login(); // Calls the login method of AuthService
  }

  onLogout() {
    // Method triggered when the "Logout" button is clicked
    this.authService.logout(); // Calls the logout method of AuthService
  }
}
