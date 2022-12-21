import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { PrecoComponent } from './components/preco/preco.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precos', component: PrecoComponent },
  { path: 'informacoes', component: InformacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
