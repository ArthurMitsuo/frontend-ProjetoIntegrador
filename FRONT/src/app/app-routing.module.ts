
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoListarComponent } from './pages/grupo/grupo-listar/grupo-listar.component';

const routes: Routes = [
  {
    path: "pages/grupo/listar",
    component: GrupoListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
