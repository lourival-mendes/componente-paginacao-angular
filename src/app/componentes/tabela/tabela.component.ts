import { Component, Input } from '@angular/core';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
})
export class TabelaComponent {
  @Input() registros: Pessoa[] = [];
}
