import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appRandomColors]",
})
export class RandomColorsDirective {
  myColors: string[] = ["red", "green", "blue", "cyan", "yellow", "brown"];
  @HostBinding("style.color") color: string;
  @HostBinding("style.border-color") bordercolor: string;
  @HostListener("keydown") setColor() {
    let colorIndex = Math.floor(Math.random() * this.myColors.length);
    this.color = this.myColors[colorIndex];
    this.bordercolor = this.myColors[colorIndex];
  }

  constructor() {}
}
