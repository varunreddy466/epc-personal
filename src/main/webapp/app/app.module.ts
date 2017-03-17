import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainMenuComponent }  from './main-menu/main-menu.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { AdBannersComponent }  from './ad-banners/ad-banners.component';
import { HotCategoriesComponent }  from './hot-categories/hot-categories.component';
import { FooterComponent }  from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MainMenuComponent, DashboardComponent, FooterComponent, HotCategoriesComponent, AdBannersComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
