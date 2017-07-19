// Type definitions for ./node_modules/parallax-js/deploy/parallax.js
// Project: ParallaxJS
// Definitions by: Roger Alvarez <[YOUR_URL_HERE]> 

//declare function Parallax(element: HTMLElement, options?: Parallax.Options): any;
declare class Parallax {
    constructor(element: HTMLElement, options?: ParallaxJS.Options);
}
declare namespace ParallaxJS {
    interface Options {
        relativeInput: boolean;
        clipRelativeInput: boolean;
        hoverOnly: boolean;
        inputElement: HTMLElement;
    }
}
