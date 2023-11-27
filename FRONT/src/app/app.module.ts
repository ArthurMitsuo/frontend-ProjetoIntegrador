import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { GrupoAlterarComponent } from './pages/grupo/grupo-alterar/grupo-alterar.component';
import { GrupoCadastrarComponent } from './pages/grupo/grupo-cadastrar/grupo-cadastrar.component';
import { GrupoListarComponent } from './pages/grupo/grupo-listar/grupo-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    GrupoListarComponent,
    GrupoCadastrarComponent,
    GrupoAlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
