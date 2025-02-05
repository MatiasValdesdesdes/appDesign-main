import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // El selector usado en el HTML
})
export class HighlightDirective {
  @Input() appHighlight: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight || 'yellow');
  }
}
