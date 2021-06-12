import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ParticlesModule } from 'angular-particle';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeroComponent } from './hero/hero.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-list/card-item/card-item.component';
import { SocialnetnavComponent } from './components/socialnetnav/socialnetnav.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    HeroComponent,
    CardListComponent,
    CardItemComponent,
    SocialnetnavComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
