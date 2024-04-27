import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // Importing ActivatedRoute and Params from Angular router
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  id: number; // Property to store the user id

  constructor(
    private route: ActivatedRoute, // Constructor with ActivatedRoute injected
    private userService: UserService
  ) {}

  ngOnInit() { // OnInit lifecycle hook
    this.route.params.subscribe((params: Params) => { // Subscribing to route params changes
      this.id = +params.id; // Extracting and converting the id parameter to a number
    });
  }

  onActivate() {
    // this.userService.activatedEmitter.emit(true); // Emitting an activation event

    this.userService.activatedEmitter.next(true); // Emitting an activation event using next method of Subject
  }
}
