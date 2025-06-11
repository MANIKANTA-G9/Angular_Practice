import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[onHoverColorChange]'
})
export class onHoverColorChange {

  constructor(private renderer: Renderer2, private ele: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.ele.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.ele.nativeElement, 'backgroundColor');
    this.renderer.removeStyle(this.ele.nativeElement, 'color');
  }
}