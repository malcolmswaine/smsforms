import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { PrismService } from '../../Prism.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements AfterViewInit {
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService
  ) {}
  ngAfterViewInit() {
    this.prism.init();
  }
}
