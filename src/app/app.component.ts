import { Component, OnInit } from '@angular/core';
import { RequestPessoa } from './model/requestPessoa';
import { ResponsePessoa } from './model/responsePessoa';
import { PessoaService } from './services/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  requestPessoa: RequestPessoa = new RequestPessoa();
  responsePessoa: ResponsePessoa = new ResponsePessoa();

  constructor(private readonly pessoaService: PessoaService) {
    this.requestPessoa.pagina = 1;
    this.requestPessoa.tamanhoPagina = 5;
  }

  ngOnInit(): void {
    this.mudaPagina();
  }

  mudaPagina(pagina: number = 1): void {
    this.requestPessoa.pagina = pagina;
    this.pessoaService
      .listarPessoasPaginado(this.requestPessoa)
      .subscribe((responsePessoa) => {
        this.responsePessoa = responsePessoa;
      });
  }
}
