import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  searchQuery: string = '';
  items: string[];

  constructor() {
    this.items = [
      'Casa Própria',
      'Viagem',
      'Aposentadoria',
      'Resgate'
    ];
  }

}
