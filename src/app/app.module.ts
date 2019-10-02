import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { UrlComponent } from './url/url.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoutiqueComponent } from './boutique/boutique.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    UrlComponent,
    HomeComponent,
    PageNotFoundComponent,
    BoutiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
