import { UsuarioOperacional } from './usuarioOperacional.model';
import { UsuarioGerencial } from './usuarioGerencial.model';
export interface Grupo {
  grupoId?: number,
  nome: string,
  descricao: string,
  usuarioOperacional?: UsuarioOperacional[],
  usuarioGerencial?: UsuarioGerencial,
}
