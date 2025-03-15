import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResponsePessoa } from '../../model/responsePessoa';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss'],
})
export class PaginadorComponent {
  registrosPorPagina: number = 0;
  @Input() responsePessoa: ResponsePessoa = new ResponsePessoa();
  @Output() mudaPagina = new EventEmitter<number>();

  get totalPaginas(): number {
    return Math.ceil(
      this.responsePessoa.totalRegistros / this.registrosPorPagina
    );
  }

  get paginas(): number[] {
    const paginas: number[] = [];
    const paginainicial = Math.max(1, this.responsePessoa.paginaAtual - 5);
    const paginaFinal = Math.min(
      this.responsePessoa.totalPaginas,
      this.responsePessoa.paginaAtual + 5
    );

    for (let i = paginainicial; i <= paginaFinal; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  chamaPagina(pagina: number): void {
    if (
      pagina >= 1 &&
      pagina <= this.responsePessoa.totalPaginas &&
      pagina !== this.responsePessoa.paginaAtual
    ) {
      this.responsePessoa.paginaAtual = pagina;
      this.mudaPagina.emit(pagina);
    }
  }

  chamaPaginaAnterior(): void {
    this.chamaPagina(this.responsePessoa.paginaAtual - 1);
  }

  chamaProximaPagina(): void {
    this.chamaPagina(this.responsePessoa.paginaAtual + 1);
  }
}
