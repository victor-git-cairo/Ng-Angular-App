import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  loadPage = 'recipe';

  navigateTo(page: string) {
    this.loadPage = page; 
  }
}
