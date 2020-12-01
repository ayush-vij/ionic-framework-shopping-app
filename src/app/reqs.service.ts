import { Injectable } from '@angular/core';
import { Requests } from './reqs.model'

@Injectable({
  providedIn: 'root'
})
export class ReqsService {
  private _reqs: Requests[] = [];
  
  get reqs() {
    return [...this._reqs];
  }
  addReq(
    id: string,
    name: string,
    category: string,
    descreq: string,
  ){
    const newReq = new Requests(
      Math.random().toString(),
      name,
      category,
      descreq,
    );
    this._reqs.push(newReq);
    // console.log("Here" +this._reqs);
  }

  helloreqs(id: string){
    return {...this._reqs.find(p => p.id === id)};
  }
  removeReq(id: string){
    const position = this._reqs.findIndex(
      p=>p.id===id
    );
    this._reqs.splice(position,1);
  }
  constructor() { }
}
