import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPessoa } from '../model/requestPessoa';
import { ResponsePessoa } from '../model/responsePessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  url: string = 'http://localhost:8080/pessoas';

  constructor(private readonly httpClient: HttpClient) {}

  listarPessoasPaginado(
    requestPessoa: RequestPessoa
  ): Observable<ResponsePessoa> {
    let parametros = new HttpParams();

    if (requestPessoa.pagina !== undefined) {
      parametros = parametros.set('page', requestPessoa.pagina.toString());
    }
    if (requestPessoa.tamanhoPagina !== undefined) {
      parametros = parametros.set(
        'size',
        requestPessoa.tamanhoPagina.toString()
      );
    }

    return this.httpClient.post<ResponsePessoa>(
      this.url + '/filter',
      { nome: 'string' },
      {
        params: parametros,
      }
    );
  }
}
