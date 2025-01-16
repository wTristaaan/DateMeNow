import { Component, OnInit } from '@angular/core';
import { ComponentStatusService } from 'src/app/services/component-status.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent  implements OnInit {
  componantName: string = "date"

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
