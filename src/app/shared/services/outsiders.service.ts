import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OutsidersService {

  constructor(private http: Http) { }

  republicaVirtualCepSearch = (cep) => new Promise((resolve, reject) => {
    this.http.get(
      'http://cep.republicavirtual.com.br/web_cep.php?cep='+cep+'&formato=json'
    ).subscribe(res => {
      resolve(res);
    });
  })

  receitaWsCnpjSearch = (cnpj) => new Promise((resolve, reject) => {    
    this.http.get(
      'https://www.receitaws.com.br/v1/cnpj/'+cnpj
    ).subscribe(res => {
      resolve(res);
    });
  })
}
