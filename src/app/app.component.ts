import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  totalRegistros: number = 100;
  registrosPorPagina: number = 10;
  paginaAtual: number = 1;

  mudaPagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.geraPagina();
  }

  geraPagina(): void {}
}
