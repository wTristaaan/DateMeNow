import { Component, OnInit } from '@angular/core';
import { ComponentStatusService } from 'src/app/services/component-status.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: false
})
export class TopbarComponent  implements OnInit {
  showBackIcon: boolean = true;

  constructor(
    private componentStatusService: ComponentStatusService
  ) { }

  ngOnInit() {
    this.componentStatusService.currentDataComponent.subscribe(component => {
      if(component == "index"){
        this.showBackIcon = false;
      }else{
        this.showBackIcon = true;
      }
    });
  }

  backToOldComponent(){
    this.componentStatusService.backToOldComponent()
  }

}
