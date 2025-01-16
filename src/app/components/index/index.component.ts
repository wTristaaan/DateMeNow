import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentStatusService } from 'src/app/services/component-status.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent  implements OnInit, OnDestroy{
  componantName: string = "index"

  constructor(
    private componentStatusService: ComponentStatusService
  ) { }

  ngOnInit() {
    this.componentStatusService.updateCurrentComponent(this.componantName)
  }

  ngOnDestroy() {
    this.componentStatusService.updateOldComponent(this.componantName)
  }

}
