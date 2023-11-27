import { UsuarioOperacional } from './usuarioOperacional.model';
import { UsuarioGerencial } from './usuarioGerencial.model';
export interface Cargo {
  cargoId?: number,
  nome: string,
  descricao: string,
  usuarioOperacional: UsuarioOperacional[],
  usuarioGerencial: UsuarioGerencial[],
}
