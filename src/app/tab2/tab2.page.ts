import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from '../data.service';
import { data } from '../data.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cartItems: data [];

  constructor(private loadingController: LoadingController,
    private router: Router,
    private dataService: DataService,
    private alertController: AlertController) {}
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

  isInCart(item: data){
    return this.dataService.isItemInCart(item);
  }


  ionViewWillEnter(){
    this.cartItems = this.dataService.getCartItems();
    // console.log(this.cartItems);
  }
}

