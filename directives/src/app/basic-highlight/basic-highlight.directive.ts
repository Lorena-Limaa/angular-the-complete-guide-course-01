import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' // Selector for the directive
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {} // Injecting ElementRef to access the native element

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'coral'; // Setting the background color of the element
    }
}