import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { ReqsService } from '../reqs.service';
import { Requests } from '../reqs.model'

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.page.html',
  styleUrls: ['./itemdetails.page.scss'],
})
export class ItemdetailsPage implements OnInit {
  item: any;
  id: any;
  constructor(
    private router: Router,
    private reqsService: ReqsService,
    private route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('identi');
      console.log(this.id);
      this.item = this.reqsService.helloreqs(this.id);
      console.log(this.item);
    }

}
