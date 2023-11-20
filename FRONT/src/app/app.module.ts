import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';

import { GrupoListarComponent } from './pages/grupo/grupo-listar/grupo-listar.component';
import { GrupoCadastrarComponent } from './pages/grupo/grupo-cadastrar/grupo-cadastrar.component';
import { GrupoAlterarComponent } from './pages/grupo/grupo-alterar/grupo-alterar.component';

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
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
