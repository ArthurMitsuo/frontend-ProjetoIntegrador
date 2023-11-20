import { Grupo } from "./grupo.model";

export interface UsuarioOperacional {
  usuarioId?: number,
  login: string,
  nome: string,
  data_nascimento: string,
  grupo: Grupo
}
