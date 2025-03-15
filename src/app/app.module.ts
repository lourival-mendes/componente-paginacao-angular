import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginadorComponent } from './componentes/paginador/paginador.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './componentes/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginadorComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
