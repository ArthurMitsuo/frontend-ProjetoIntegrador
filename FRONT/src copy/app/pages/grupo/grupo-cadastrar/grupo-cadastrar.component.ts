import { UsuarioGerencial } from './../../../models/usuarioGerencial.model';
import { UsuarioOperacional } from './../../../models/usuarioOperacional.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from 'express';
import { Grupo } from '../../../models/grupo.model';

@Component({
  selector: 'app-grupo-cadastrar',
  templateUrl: './grupo-cadastrar.component.html',
  styleUrl: './grupo-cadastrar.component.css'
})
export class GrupoCadastrarComponent {
  nome: string = "";
  descricao: string = "";
  usuariosOperacionais: UsuarioOperacional[]=[];
  usuariosGerenciais: UsuarioGerencial[]=[];

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.client
      .get<UsuarioOperacional[]>("https://localhost:7083/api/usuario/operacional/listar")
      .subscribe({
        //A requição funcionou
        next: (usuarios) => {
          this.usuariosOperacionais = usuarios;
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });

    this.client
    .get<UsuarioOperacional[]>("https://localhost:7083/api/usuario/gerencial/listar")
    .subscribe({
      //A requição funcionou
      next: (usuarios) => {
        this.usuariosGerenciais = usuarios;
      },
      //A requição não funcionou
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  cadastrar(): void {
    let grupo: Grupo = {
      nome: this.nome,
      descricao: this.descricao,
    };

    this.client
      .post<Grupo>("https://localhost:7083/api/produto/cadastrar", grupo)
      .subscribe({
        //A requição funcionou
        next: (grupo) => {
          this.snackBar.open("Produto cadastrado com sucesso!!", "E-commerce", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          //VERIFICAR ABAIXO
          //this.router.navigate(["pages/grupo/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
