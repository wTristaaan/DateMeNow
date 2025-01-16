import { Component, OnInit } from '@angular/core';
import { ComponentStatusService } from 'src/app/services/component-status.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent  implements OnInit {
  componantName: string = "profil"

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
