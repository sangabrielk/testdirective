import { Directive, ElementRef, Renderer, HostListener  } from '@angular/core';

@Directive({
  selector: '[apphighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#face00');
  }



}
