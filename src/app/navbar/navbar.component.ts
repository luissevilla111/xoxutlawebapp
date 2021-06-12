import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { BlockbodyService } from '../shared/blockbody.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('menuOpenTrigger',[
      state('open',style({
        padding: '1000rem',
            top: '-999.8rem',
            right:'-999.8rem',
            /*background:'green'*/
      })),

      transition('close => open',[

        animate('0.2s',keyframes([
          style({

            padding: '10rem',
            top: '-9.8rem',
            right:'-9.8rem',
            offset:0

          }),
          style({

            padding: '50rem',
            top: '-49.8rem',
            right:'-49.8rem',
            offset:0.5

          }),
          style({

            padding: '200rem',
            top: '-199.8rem',
            right:'-199.8rem',
            offset:0.9
          }),
          style({

            padding: '1000rem',
            top: '-999.8rem',
            right:'-999.8rem',
            offset:1
          })
        ]))
      ]),
      transition('open => close',[
        animate('0.2s',keyframes([
          style({

            padding: '1000rem',
            top: '-999.8rem',
            right:'-999.8rem',
            offset:0
          }),
          style({

            padding: '200rem',
            top: '-199.8rem',
            right:'-199.8rem',
            offset:0.1
          }),
          style({

            padding: '50rem',
            top: '-49.8rem',
            right:'-49.8rem',
            offset:0.5

          }),
          style({

            padding: '10rem',
            top: '-9.8rem',
            right:'-9.8rem',
            offset:1

          }),

        ]))
      ])
    ])
  ]

})
export class NavbarComponent implements OnInit {
  @ViewChild('par',{static:true}) particles:any
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  showMenu = false;
  openMenu = 'close'


  constructor(
    private blockBodyService:BlockbodyService,
    private renderer: Renderer2) {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background':'transparent',

    };

    this.myParams = {
          particles: {
              number: {
                  value: 200,
              },
              color: {
                  value: '#009933'
              },
              shape: {
                  type: 'circle',
                  image:{
                    src:'../../assets/images/297257.svg',
                    width: 100,
                    height: 100
                  }
              },
              line_linked:{
                enable:false
              },
              size:{
                value:10
              },
          },
          interactivity:{
            events:{
              onhover:{
                enable:false
              }
            }

          }
    };
  }

  ngOnInit(): void {
    console.log(this.particles)
  }

  activateMenu(){
    this.openMenu = 'open';
     this.renderer.addClass(document.body,'block-body')

  }

  showMenuListItems(){
    if(this.openMenu === 'open'){
      this.showMenu = true;
    }

  }

  disactive(){
    this.showMenu = false;
    this.openMenu = 'close';
    this.renderer.removeClass(document.body,'block-body');
  }
}
