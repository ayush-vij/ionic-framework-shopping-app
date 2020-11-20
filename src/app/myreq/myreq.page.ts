import { Component, OnInit } from '@angular/core';
import { Requests } from '../reqs.model';
import { ReqsService } from '../reqs.service';

@Component({
  selector: 'app-myreq',
  templateUrl: './myreq.page.html',
  styleUrls: ['./myreq.page.scss'],
})
export class MyreqPage {
  loadedReqs: Requests[];
  constructor(private reqsService: ReqsService) { }

  ionViewWillEnter() {
    this.loadedReqs = this.reqsService.reqs;
    console.log(this.loadedReqs);
  }
  onRemoveReqs(id:string){
    this.reqsService.removeReq(id);
    this.loadedReqs = this.reqsService.reqs;
  }
}
