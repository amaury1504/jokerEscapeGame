import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { IndiceComponent } from './indice/indice.component';
import { UrlComponent } from './url/url.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoutiqueComponent } from './boutique/boutique.component';


const routes: Routes = [
  { path: 'indice', component: IndiceComponent},
  { path: 'boutique', component: BoutiqueComponent},
  { path: 'Amauryestbeau', component: UrlComponent},
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
