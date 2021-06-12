import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    "../../assets/images/new-york-668616_1920.jpg",
    "../../assets/images/pexels-brett-jordan-842519.jpg"
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    'autoplay':true,
    'autoplaySpeed':3000,
    'pauseOnFocus':false,
    'pauseOnHover':false,
    'pauseOnDotsHover':false};

  addSlide() {
    //this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    //console.log('slick initialized');
  }

  breakpoint(e:any) {
    //console.log('breakpoint');
  }

  afterChange(e:any) {
    //console.log('afterChange');
  }

  beforeChange(e:any) {
    //console.log('beforeChange');
  }

}
