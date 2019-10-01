import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CibleComponent } from './cible/cible.component';
import { AppComponent } from './app.component';
import { DestructionComponent } from './destruction/destruction.component';
import { IndiceComponent } from './indice/indice.component';
import { UrlComponent } from './url/url.component';


const routes: Routes = [
  { path: 'cible', component: CibleComponent },
  { path: '', component: AppComponent },
  { path: 'destruction', component: DestructionComponent},
  { path: 'indice', component: IndiceComponent},
  { path: 'Amauryestbeau', component: UrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
