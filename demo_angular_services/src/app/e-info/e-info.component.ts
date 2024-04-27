import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  providers: [DataService]
})
export class EInfoComponent {

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  constructor(private dataService: DataService) {}

  getInfoFromService1() {
    this.infoReceived1 = this.dataService.getInfo1();
  }

  getInfoFromService2() {
    this.infoReceived2 = this.dataService.getInfo2();
  }

  getInfoFromService3() {
    this.infoReceived3 = this.dataService.getInfo3();
  }

  updateInfo(frm: any) {
    this.dataService.addInfo(frm.value.location);
  }
}
