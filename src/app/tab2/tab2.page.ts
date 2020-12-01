import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';
import { data } from '../data.interface';
import { Data } from '../data.model';
import { NgIf } from '@angular/common';
import { ReqsService } from '../reqs.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cartItems: data [];
  sendOrder : data [];

  constructor(private loadingController: LoadingController,
    private router: Router,
    private dataService: DataService,
    private alertController: AlertController,
    private reqs: ReqsService) {}
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      duration: 2500,
      message: 'Wrapping your order..',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
      animated: true
    });
    await loading.present();
    
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
    this.router.navigate(['/checkout']);
  }

  async emptyCartAlert() {
    const alert = await this.alertController.create({
      header: 'Cart Empty!',
      subHeader: 'The cart is empty.',
      buttons: [
        {
          text: 'Shop now!',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ]
    });
    await alert.present();
  }

  fusionFunction(){
    this.presentLoadingWithOptions();
    this.sendOrder = this.dataService.getOrderItem();
  }


  ionViewWillEnter(){
    this.cartItems = this.dataService.getCartItems();
    if(this.cartItems.length<1){
      this.emptyCartAlert();
    }
    // console.log(this.cartItems);
  }
  onRemoveReqs(id:string){
    this.reqs.removeReq(id);
    // this.cartItems = this.reqs.reqs;
  }
}

