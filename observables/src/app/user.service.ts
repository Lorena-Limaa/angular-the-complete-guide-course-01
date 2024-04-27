import { EventEmitter, Injectable } from "@angular/core";

import { Subject } from 'rxjs'; // Importing Subject from RxJS

@Injectable({providedIn: 'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>(); // EventEmitter to emit activation events

    activatedEmitter = new Subject<boolean>(); // Subject to emit activation events
}