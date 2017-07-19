import { Directive, ElementRef, OnInit} from '@angular/core';


@Directive({
  selector: '[appParallaxJs]'
})
export class ParallaxJsDirective implements OnInit {

  elementId: HTMLElement;
  constructor(element: ElementRef) {
    this.elementId = element.nativeElement;
  }

  ngOnInit() {
    console.log(this.elementId);
    const test = new Parallax(this.elementId);
    console.log('parallax', test);

  }

}
