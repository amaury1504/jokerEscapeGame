import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { CibleComponent } from './cible/cible.component';
import { DestructionComponent } from './destruction/destruction.component';
import { UrlComponent } from './url/url.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    CibleComponent,
    DestructionComponent,
    UrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
