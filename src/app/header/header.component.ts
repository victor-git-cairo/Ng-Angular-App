import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedOption = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(option: string) {
    console.log(option);
    this.selectedOption.emit(option)
  }

}
