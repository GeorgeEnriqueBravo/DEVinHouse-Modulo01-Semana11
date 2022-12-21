import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhillipsPipe } from './pipes/captalize-phillips.pipe';
import { HomeComponent } from './components/home/home.component';
import { PrecoComponent } from './components/preco/preco.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhillipsPipe,
    HomeComponent,
    PrecoComponent,
    InformacoesComponent,
    NgForComponent,
    NgIfComponent,
    NgContentComponent,
    NgIfElseComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
