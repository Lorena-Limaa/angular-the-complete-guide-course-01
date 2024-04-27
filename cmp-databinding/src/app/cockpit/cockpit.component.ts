import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>; // Event emitter for server creation
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>; // Event emitter for blueprint creation

  // newServerName = ''; // Variable to hold the new server name
  // newServerContent = ''; // Variable to hold the new server content
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) { // Method to emit event for adding a server
    this.serverCreated.emit({
      serverName: nameInput.value, // Pass the new server name
      serverContent: this.serverContentInput.nativeElement.value // Pass the new server content
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) { // Method to emit event for adding a blueprint
    this.bluePrintCreated.emit({
      serverName: nameInput.value, // Pass the new server name
      serverContent: this.serverContentInput.nativeElement.value // Pass the new server content
    });
  }
}
