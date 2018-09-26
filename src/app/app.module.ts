import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { OnlyNumbersInputComponent } from './only-numbers-input/only-numbers-input.component';
import { OnlyNumbersJustOneDotDirective } from './directives/only-numbers-just-one-dot.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumbersDirective,
    OnlyNumbersJustOneDotDirective,
    OnlyNumbersInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
