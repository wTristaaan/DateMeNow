import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent  implements OnInit {
  @Output() componentSelected = new EventEmitter<string>();
  activeComponent: string = 'index';

  constructor() { }

  ngOnInit() {}

  selectComponent(component: string) {
    this.activeComponent = component;
    this.componentSelected.emit(component);
  }

}
