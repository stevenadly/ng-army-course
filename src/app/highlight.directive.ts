import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  @Input("appHighlight") appHighlight: string;
  @HostBinding("class.steven") hoverClass: Boolean;

  constructor(private el: ElementRef, private render: Renderer2) {}
  @HostListener("mouseenter") onMouseEnter() {
    this.hoverClass = true;
    this.highlight(this.appHighlight || "yellow");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.hoverClass = false;
    this.highlight("transparent");
  }

  private highlight(color: string) {
    this.render.setStyle(this.el.nativeElement, "background", color);
  }
}
