import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ParallaxJsDirective } from './parallax-js.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    ParallaxJsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
