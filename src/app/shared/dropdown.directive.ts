
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.is-active') isActive: boolean = false;

  @HostListener('click') toggleActive() {
   this.isActive = !this.isActive;
  }
}