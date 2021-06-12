import { Injectable } from '@angular/core';
import {CardItemModel} from '../Model/carditem.model'

@Injectable({
  providedIn: 'root'
})
export class CarditemService {

  constructor() { }

  tarjeta = new CardItemModel('imagen','Restaurant','some description');

  getCardInfo(){
    return this.tarjeta;
  }
}
