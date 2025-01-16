import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentStatusService {
  private currentComponent = new BehaviorSubject<any>(null);
  currentDataComponent = this.currentComponent.asObservable();
  oldComponent: string = '';
  private newCurrentComponent = new BehaviorSubject<any>(null);
  newCurrentDataComponent = this.newCurrentComponent.asObservable();

  constructor() { }

  updateCurrentComponent(componentName : string){
    this.currentComponent.next(componentName);
  }

  getOldComponent(){
    return this.oldComponent;
  }

  updateOldComponent(componentName : string){
    this.oldComponent = componentName;
  }

  backToOldComponent(){
    this.newCurrentComponent.next(this.getOldComponent())
  }
}
