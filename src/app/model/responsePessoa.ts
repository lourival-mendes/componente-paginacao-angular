import { Pessoa } from './pessoa';

export class ResponsePessoa {
  paginaAtual: number = 0;
  resultados: Pessoa[] = [];
  tamanhoPagina: number = 0;
  totalPaginas: number = 0;
  totalRegistros: number = 0;
}
