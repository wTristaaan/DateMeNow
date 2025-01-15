import { Component } from '@angular/core';
import { IndexComponent } from '../components/index/index.component';
import { DateComponent } from '../components/date/date.component';
import { ProfilComponent } from '../components/profil/profil.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  selectedComponent: any = IndexComponent;

  constructor() {}

  onComponentSelected(componentName: string) {
    switch (componentName) {
      case 'index':
        this.selectedComponent = IndexComponent;
        break;
      case 'date':
        this.selectedComponent = DateComponent;
        break;
      case 'profil':
        this.selectedComponent = ProfilComponent;
        break;
      default:
        this.selectedComponent = IndexComponent;
    }
  }

}
