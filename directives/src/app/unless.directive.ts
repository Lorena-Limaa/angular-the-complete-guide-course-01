import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'; // Import necessary Angular core modules

@Directive({
  selector: '[appUnless]' // Selector for the directive
})
export class UnlessDirective {
  // Setter for the input property `appUnless`
  @Input() set appUnless(condition: boolean) { 
    if (!condition) { // If the condition is falsy
      this.vcRef.createEmbeddedView(this.templateRef); // Create an embedded view of the directive's template
    } else {
      this.vcRef.clear(); // Clear the view container if the condition is truthy
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, // Inject TemplateRef to access the directive's template
    private vcRef: ViewContainerRef // Inject ViewContainerRef to interact with the view container
  ) { }
}
 