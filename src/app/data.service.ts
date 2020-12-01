import { Injectable } from '@angular/core';
import { Data } from './data.model'
import { data } from './data.interface'
@Injectable({
  providedIn: 'root'
})
export class DataService {
private itemsInCart: Data[] = [];
private orderItem: Data[] = [];
  
  private _items: Data[] = [
    new Data(
      'i1',
      'Roller Ball Pen',
      5.99,
      1,
      '../assets/imgs/rollerpen.png'
      ),
      new Data(
        'i2',
        'Fountain Pen',
        6.49,
        1,
        '../assets/imgs/inkpen.png'
        ),
        new Data(
          'i3',
          'Crayons',
          2.99,
          1,
          '../assets/imgs/crayons.png'
          ),
          new Data(
            'i4',
            'Colorful Pencils',
            2.49,
            1,
            '../assets/imgs/colorpencils.png'
            ),
            new Data(
              'i5',
              'Post-It',
              1.99,
              1,
              '../assets/imgs/postit.png'
              ),
              new Data(
                'i6',
                'Notebook',
                2.99,
                1,
                '../assets/imgs/notebook.png'
                ),
  ];
  get items(){
    return [...this._items];
  }

  fetchItems(id: string){
      return {...this._items.find(p => p.id === id)};
    }

  addItemToCart(item: Data){
    this.itemsInCart.push(item);
  }

  addOrder(item: Data){
    this.orderItem.push(item);
  }

  getOrderItem(){
    return this.orderItem.slice();
  }
  
  getCartItems(){
    return this.itemsInCart.slice();
  }

  isItemInCart(item: Data){
    return this.itemsInCart.find((dataEl: Data) => {
      return dataEl.id === item.id;
    });
  }

    constructor() { }
  }


