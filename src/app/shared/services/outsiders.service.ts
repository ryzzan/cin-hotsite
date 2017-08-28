import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from './../../../environments/environment';

@Injectable()
export class OutsidersService {

  constructor(private http: Http) { }

  republicaVirtualCepSearch = (cep) => new Promise((resolve, reject) => {
    this.http.get(
      'https://events.nitrofull.com.br/api/cepws?cep='+cep
    ).subscribe(res => {
      resolve(res);
    });
  })

  receitaCpfSearch = (cpf) => new Promise((resolve, reject) => {
    let header = new Headers({
      'Access-Control-Allow-Origin': '*'
    });

    let options = new RequestOptions({ headers: header});

    this.http.get(
      environment.urlToApi+"cpfws?cpf="+cpf
    ).subscribe(res => {
      resolve(res);
    });
  })

  receitaWsCnpjSearch = (cnpj) => new Promise((resolve, reject) => {
    let header = new Headers({
      'Access-Control-Allow-Origin': '*'
    });

    let options = new RequestOptions({ headers: header});

    this.http.get(
      environment.urlToApi+"receitaws?cnpj="+cnpj
    ).subscribe(res => {
      resolve(res);
    });
  })
}
