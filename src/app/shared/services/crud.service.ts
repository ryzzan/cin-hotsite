import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*Firebase*/
import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {
  headersToAuth: Headers;
  optionsToAuth: RequestOptions;
  url = environment.urlToApi;
  crudUrl = environment.urlToCrud;

  constructor(private http: Http) { }

  /*
    CREATE
    Problema:
    Performance tá uma merda porque em cada iteração de elemento está sendo feita uma ação com o firebase
    Porque:
    Para lidar com subchilds suas propriedades e valores dentro da child que está sendo iterada, por exemplo, é preciso alterar a ref para a child, por isso não dá pra simplesmente montar todo o objeto e enviar pra uma mesma ref
    Solução:
    Pensar
  */
  create = (source, params) => new Promise((resolve, reject) => {
    let route: string = params.route;
    
    switch(source) {
      case 'laravel':
        let arr: any;
        let check: any;
        let countChildIteration: number; //Para ver se é a primeira iteração da child e definir se a acão será push ou update
        let keyToUpdate: any;//APAGAR NO CASO DE RESOLVER A SITUAÇÃO DE MELHORA DA PERFORMANCE
        let lastKey: any;
        let lastSubchild: any;
        let obj: any;
        let objectFromSpecificKey: any;
        let ref: any;
        let ref2: any;
        let setKey: boolean;
        let objectToCreate: any = params.objectToCreate;
        
        if(!route) { // Verifica se pelo menos uma child foi definida
          reject({
            cod: "c-01",
            message: "Informar erro c-01 ao administrador"
          });
        }

        this.headersToAuth = new Headers({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('access_token')
        });

        this.optionsToAuth = new RequestOptions({
          'headers': this.headersToAuth
        })

        this.http
        .post(
          this.crudUrl+route,
          objectToCreate
        ).subscribe(res => {
          resolve({
            cod: "c-02",
            message: "Cadastro feito com sucesso"//Cadastro feito com sucesso
          });
        })
      break;

      default:
        console.log("Faltando source")
    }
  })

  readArray = (source, params) => new Promise((resolve, reject) => {
    let hide: any = ""; //E.g.: [field1, field2, field3]
    let route: string = "";
    let show: any = ""; //E.g.: [field1, field2, field3]
    
    switch(source) {
      case "laravel":
      let orderByChild = params.orderByChild;
        let equalTo;

        let ref;
        let key;
        let obj;
        let objFiltered = [];
        let objKeys;
        let res;
        let apiUrl: string = this.url;
        let objFilteredTemp: any = [];
        let orderBy: any;
        let setGet: string = '';
        let where: any; //E.g.: [[field1, operator1, value1], [field2, operator2, value2], [field3, operator3, value3]]
        
        if(!params) {
          reject({
            cod: "ra-01",
            message: "Informar erro ra-01 ao administrador"//Checar parâmetros obrigatórios
          });
        }

        if(params.show && params.hide) {
          reject({
            cod: "ra-02",
            message: "Informar erro ra-03 ao administrador"//Não pode declarar os dois parâmetros ao mesmo tempo
          });
        }

        if(!params.route) {
          reject({
            cod: "ra-03",
            message: "Informar erro ra-04 ao administrador"//É preciso declarar a rota do serviço
          });
        } else {
          route = params.route;
        }

        if(params.show) {
          setGet = "?";
          show = "show=[";
          
          for(let lim = params.show.length, i =0; i < lim; i++) {
            show += params.show[i]+",";            
          }

          show = show.substring(0, show.length - 1)+"]";
        }

        if(params.hide) {
          setGet = "?";
          hide = "hide=";
          
          for(let lim = params.hide.length, i =0; i < lim; i++) {
            hide += params.hide[i]+",";            
          }

          hide = hide.substring(0, hide.length - 1);
        }
        
        this.headersToAuth = new Headers({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('access_token')
        });

        this.optionsToAuth = new RequestOptions({
          'headers': this.headersToAuth
        })
        console.log(apiUrl+route+setGet+show);
        this.http
        .get(
          apiUrl+route+setGet+show+hide,
          this.optionsToAuth
        ).subscribe(res => {
          obj = JSON.parse(res['_body']);
          objFiltered = obj.data;
          objKeys = Object.keys(objFiltered);
          
          if(params.show) {
            objFilteredTemp = obj.data;
            objFiltered = [];
            
            for(let lim = objFilteredTemp.length, i =0; i < lim; i++) {
              let temp = {};

              for(let j = 0; j < params.show.length; j++) {
                temp[params.show[j]] = objFilteredTemp[i][params.show[j]];
              }

              objFiltered.push(temp);
            }

            obj = objFiltered;

            resolve({
              obj
            });
          } else {
            obj = objFiltered;
            
            resolve({
              obj
            });
          }
        })
      break;

      default:
        console.log("Faltando source")
    }
  })

  readObject = (source, params) => new Promise((resolve, reject) => {
    switch(source) {
      case 'laravel':
        let apiUrl: string = this.url;
        let route: string = params.route;
        let value: string = params.value;
        let child;
        let orderByChild;
        let equalTo;

        let ref;
        let key;
        let obj;
        let res;

        if(!route) {
          reject({
            cod: "ro-01",
            message: "Informar erro ro-01 ao administrador"
          });
        }

        if(!value) {
          reject({
            cod: "ro-02",
            message: "Informar erro ro-02 ao administrador"
          });
        }

        this.headersToAuth = new Headers({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('access_token')
        });

        this.optionsToAuth = new RequestOptions({
          'headers': this.headersToAuth
        })

        this.http
        .get(
          apiUrl+route+"/"+value,
          this.optionsToAuth
        ).subscribe(res => {
          obj = JSON.parse(res['_body']);
          
          resolve({
            obj
          });
        })
      break;

      default:
        console.log("Faltando source");
    }
  })
  
  update = (source, params) => new Promise((resolve, reject) => {
    switch(source) {
      case 'laravel':
        let arr: any;
        let check: any;
        let child: any = params.child;
        let countChildIteration: number;
        let idChildToUpdate: any = params.idChildToUpdate;
        let lastKey: any;
        let lastSubchild: any;
        let obj: any;
        let objectToUpdate: any = params.objectToUpdate;
        let ref: any;
        let ref2: any;
        let setKey: boolean;
        let updateFromSpecificKey: any;
        let apiUrl: string = this.crudUrl;
        let objectToCreate: any = params.objectToCreate;
        let route: string = params.route;
        let value: string = params.value;

        if(!route) {
          reject({
            cod: "u-01",
            message: "Informar erro u-01 ao administrador"
          });
        }

        if(!value) {
          reject({
            cod: "u-02",
            message: "Informar erro u-02 ao administrador"
          });
        }

        this.headersToAuth = new Headers({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('access_token')
        });

        this.optionsToAuth = new RequestOptions({
          'headers': this.headersToAuth
        })

        this.http
        .put(
          apiUrl+route+"/"+value,
          objectToCreate,
          this.optionsToAuth
        ).subscribe(res => {
          resolve({
            cod: "u-03",
            message: "Atualização feita com sucesso"
          });
        })
      break;

      default:
        console.log("Faltando source");
    }
  })

  upload = (source, params) => new Promise((resolve, reject) => {
    switch(source) {
      case 'laravel':
        let arr: any;
        let check: any;
        let countChildIteration: number; //Para ver se é a primeira iteração da child e definir se a acão será push ou update
        let keyToUpdate: any;//APAGAR NO CASO DE RESOLVER A SITUAÇÃO DE MELHORA DA PERFORMANCE
        let lastKey: any;
        let lastSubchild: any;
        let obj: any;
        let objectFromSpecificKey: any;
        let ref: any;
        let ref2: any;
        let setKey: boolean;
        let apiUrl: string = this.url;
        let objectToCreate: any = params.objectToCreate;
        let route: string = params.route;
        
        if(!route) { // Verifica se pelo menos uma child foi definida
          reject({
            cod: "u-01",
            message: "Informar erro c-01 ao administrador"
          });
        }

        this.headersToAuth = new Headers({
          'Authorization': sessionStorage.getItem('access_token')
        });

        this.optionsToAuth = new RequestOptions({
          'headers': this.headersToAuth
        })

        this.http
        .post(
          apiUrl+route,
          objectToCreate,
          this.optionsToAuth
        ).subscribe(res => {
          resolve({
            cod: "u-02",
            message: "Upload feito com sucesso"
          });
        })
      break;

      default:
        console.log("Faltando source")
    }
  })
}