import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() numtarjetas:number  = 0;
  tarjetasSize = new Array()

  constructor() {
    console.log("tarjetassize" + this.numtarjetas)
   }

  ngOnInit(): void {
    this.tarjetasSize = new Array(this.numtarjetas);
  }

}
