import { Injectable } from '@angular/core';
import { Data } from './data.model'
import { data } from './data.interface'
@Injectable({
  providedIn: 'root'
})
export class DataService {
private itemsInCart: data[] = [];
  
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
        5.99,
        1,
        '../assets/imgs/inkpen.png'
        ),
        new Data(
          'i3',
          'Crayons',
          5.99,
          1,
          '../assets/imgs/crayons.png'
          ),
          new Data(
            'i4',
            'Colorful Pencils',
            5.99,
            1,
            '../assets/imgs/colorpencils.png'
            ),
            new Data(
              'i5',
              'Post-It',
              5.99,
              1,
              '../assets/imgs/postit.png'
              ),
              new Data(
                'i6',
                'Notebook',
                5.99,
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

  addItemToCart(item: data){
    return this.itemsInCart.push(item);
    // console.log(this.itemsInCart);
  }
  
  getCartItems(){
    return this.itemsInCart.slice();
  }

  isItemInCart(item: data){
    return this.itemsInCart.find((dataEl: data) => {
      return dataEl.id === item.id;
    });
  }

    constructor() { }
  }


