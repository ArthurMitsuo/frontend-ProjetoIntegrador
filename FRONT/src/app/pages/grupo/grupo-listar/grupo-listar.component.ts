import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Grupo } from '../../../models/grupo.model';

@Component({
  selector: "app-grupo-listar",
  templateUrl: "./grupo-listar.component.html",
  styleUrls: ["./grupo-listar.component.css"],
})
export class GrupoListarComponent {

  colunasTabela: string[] = [
    "grupoId",
    "nome",
    "descricao",
  ];

  grupos: Grupo[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit(): void {
    this.client
      .get<Grupo[]>("https://localhost:7134/api/grupo/listar")
      .subscribe({
        //Requisição com sucesso
        next: (grupos) => {
          console.table(grupos);
          this.grupos = grupos;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(grupoId: number) {
    this.client
      .delete<Grupo[]>(
        `https://localhost:7134/api/produto/deletar/${grupoId}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (grupos) => {
          this.grupos = grupos;
          this.snackBar.open(
            "Grupo deletado com sucesso!!",
            "E-commerce",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
