
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoListarComponent } from './pages/grupo/grupo-listar/grupo-listar.component';
import { GrupoAlterarComponent } from './pages/grupo/grupo-alterar/grupo-alterar.component';
import { GrupoCadastrarComponent } from './pages/grupo/grupo-cadastrar/grupo-cadastrar.component';

const routes: Routes = [
  {
    path: "pages/grupo/listar",
    component: GrupoListarComponent
  },
  {
    path: "pages/grupo/cadastrar",
    component: GrupoCadastrarComponent
  },
  {
    path: "pages/grupo/alterar",
    component: GrupoAlterarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
