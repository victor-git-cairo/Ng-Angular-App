import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedOption = new EventEmitter<string>();
  constructor(private datastorage: DataStorageService) { }

  ngOnInit(): void {
  }

  // onSelect(option: string) {
  //   console.log(option);
  //   this.selectedOption.emit(option)
  // }

  onSaveData() {
    this.datastorage.storeRecipes();
  }

  onFetchData() {
    this.datastorage.fetchRecipes().subscribe();
  }
}
