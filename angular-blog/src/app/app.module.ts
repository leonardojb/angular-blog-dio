import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './compnents/menu-title/menu-title.component';
import { BigCardComponent } from './compnents/big-card/big-card.component';
import { SmallCardComponent } from './compnents/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './compnents/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
