import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 
} from '@angular/core'; // Importing necessary Angular core modules

@Directive({
  selector: '[appBetterHighlight]' // Selector for the directive
})
export class BetterHighlightDirective implements OnInit { // Directive class implementing OnInit lifecycle hook
  @Input() defaultColor: string = 'transparent'; // Input property for default color, defaulting to transparent
  @Input() highlightColor: string = 'pink'; // Input property for highlight color, defaulting to pink
  @HostBinding('style.backgroundColor') backgroundColor: string; // Binding the background color style property of the host element

  constructor(
    private elRef: ElementRef, // Injecting ElementRef to access the native element
    private renderer: Renderer2 // Injecting Renderer2 for DOM manipulation
  ) {}

  ngOnInit() { // Implementing ngOnInit method
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'pink'); // Setting background color using Renderer2
    this.backgroundColor = this.defaultColor; // Setting initial background color to default color
  }

  @HostListener('mouseenter') mouseover(eventData: Event) { // Listen for mouse enter event
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'pink'); // Change background color on mouse enter
    this.backgroundColor = this.highlightColor; // Change background color to highlight color on mouse enter
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) { // Listen for mouse leave event
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent'); // Change background color on mouse leave
    this.backgroundColor = this.defaultColor; // Change background color to default color on mouse leave
  }
}
