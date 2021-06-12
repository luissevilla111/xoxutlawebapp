import { Component, OnInit } from '@angular/core';
import { CardItemModel } from 'src/app/Model/carditem.model';
import { CarditemService } from 'src/app/services/carditem.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  constructor(private cardItemSer:CarditemService) { }

  public tarjeta:CardItemModel = new CardItemModel('','','');
  ngOnInit(): void {
    this.tarjeta = this.cardItemSer.getCardInfo();
  }

}
