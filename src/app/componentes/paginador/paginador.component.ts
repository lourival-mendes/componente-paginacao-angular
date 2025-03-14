import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss'],
})
export class PaginadorComponent {
  @Input() totalRegistros: number = 0;
  @Input() registrosPorPagina: number = 10;
  @Input() paginaAtual: number = 1;

  @Output() mudaPagina = new EventEmitter<number>();

  get totalPaginas(): number {
    return Math.ceil(this.totalRegistros / this.registrosPorPagina);
  }

  get paginas(): number[] {
    const paginas: number[] = [];
    const paginainicial = Math.max(1, this.paginaAtual - 5);
    const paginaFinal = Math.min(this.totalPaginas, this.paginaAtual + 5);

    for (let i = paginainicial; i <= paginaFinal; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  chamaPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas && pagina !== this.paginaAtual) {
      this.paginaAtual = pagina;
      this.mudaPagina.emit(pagina);
    }
  }

  chamaPaginaAnterior(): void {
    this.chamaPagina(this.paginaAtual - 1);
  }

  chamaProximaPagina(): void {
    this.chamaPagina(this.paginaAtual + 1);
  }
}
