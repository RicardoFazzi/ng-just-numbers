import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {

  /**
   * when this param is set to true, Directive doesn't allow the user enter decimal point / period.
   * @type {boolean}
   */
  @Input() onlyNumbers: boolean = false;

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let eventKeyDown = <KeyboardEvent> event;
    let validOptions: Array<number>;
    validOptions = [46, 8, 9, 27, 13];
    /**
     * 8 - backspace
     * 9 - tab
     * 13 - enter
     * 27 - escape
     * 46 - delete
     * 110 - decimal point
     * 190 - period
     */
    if(!this.onlyNumbers) {
      validOptions.push(110, 190);
    }
    if (validOptions.indexOf(eventKeyDown.keyCode) !== -1 ||
      // Allow: Ctrl+A - 65: a
      (eventKeyDown.keyCode === 65 && eventKeyDown.ctrlKey === true) ||
      // Allow: Ctrl+C - 67: c
      (eventKeyDown.keyCode === 67 && eventKeyDown.ctrlKey === true) ||
      // Allow: Ctrl+X - 88: x
      (eventKeyDown.keyCode === 88 && eventKeyDown.ctrlKey === true) ||
      // Allow: home, end, left, right
      (eventKeyDown.keyCode >= 35 && eventKeyDown.keyCode <= 40)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((eventKeyDown.shiftKey || (eventKeyDown.keyCode < 48 || eventKeyDown.keyCode > 57)) &&
      (eventKeyDown.keyCode < 96 || eventKeyDown.keyCode > 105)) {
      eventKeyDown.preventDefault();
    }
  }
}
