import { Component, OnInit } from '@angular/core';
import { Requests } from '../reqs.model'
import { ReqsService } from '../reqs.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newreq',
  templateUrl: './newreq.page.html',
  styleUrls: ['./newreq.page.scss'],
})
export class NewreqPage implements OnInit {
  form: FormGroup;
  reqs: Requests;
  loadedReqs: any;
  id: string;
  constructor(private route: ActivatedRoute,
  private reqsService: ReqsService,
  private router: Router) { }

  ngOnInit() {
    // this.id = this.reqs.id;
    this.form = new FormGroup({
      name: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]}),
      category: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]}),
      descreq: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]}),
    });
  }
  onAddReq(){
    this.reqsService.addReq(
      this.form.value.id,
      this.form.value.name,
      this.form.value.category,
      this.form.value.descreq,
    )
    // this.form.reset();
    this.router.navigate(['/myreq']);
    // console.log(this.reqsService.addReq);
  }
  onRemoveReq(id:string){
    this.reqsService.removeReq(id);
    this.loadedReqs = this.reqsService.reqs;
  }
}


