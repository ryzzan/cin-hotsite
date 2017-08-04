import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { countries } from './data/countries';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe.js'

/*Services*/
import { OutsidersService } from './shared/services/outsiders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') form: NgForm;

  marketChanged: boolean = false;
  objectToAPI: any;

  /*activity products by subgroup trouble: start*/
  productObject: any;
  /*activity products by subgroup trouble: end*/
  
  /*company address trouble: start*/
  addressObject: any;
  /*company address trouble: start*/
  
  /*company phone trouble: start*/
  companyPhoneTypeChanged: number;
  companyPhoneNumberChanged: string;
  companyPhoneDDDChanged: string;
  companyPhoneObject: any = [];
  createContactPhoneObjectButton: boolean = false;
  /*company phone trouble: end*/

  /*representative phone trouble: start*/
  representativePhoneTypeChanged: number;
  representativePhoneNumberChanged: string;
  representativePhoneDDDChanged: string;
  representativePhoneObject: any = [];
  createRepresentativePhoneObjectButton: boolean = false;
  /*company phone trouble: end*/

  /*representative social media trouble: start*/
  representativeSocialMediaTypeChanged: number;
  representativeSocialMediaURLChanged: string;
  representativeSocialMediaObject: any = [];
  createRepresentativeSocialMediaObjectButton: boolean = false;
  /*company social media trouble: end*/

  /*representative: start*/
  represenativeName: string;
  represenativePosition: string;
  represenativeEmail: string;
  representativeObject: any = [];
  createRepresentativeObjectButton: any;
  /*representative: end*/

  /*md-select countries: start*/
  africa: any;
  americaNorte: any;
  americaSul: any;
  antartida: any;
  asia: any;
  europa: any;
  oceania: any;
  /*md-select countries: end*/

  mask: any = {
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/,'-', /\d/,/\d/],
    date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    zip: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
    cell_phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,]
  };

  //SELECTS values
  maturityArea: any = [{
   value: 1,
   description: 'Internacional' 
  }, {
    value: 2,
    description: 'Nacional'
  }, {
    value: 3,
    description: 'Local'
  }]

  comercialArea: any = [{
    value: 'comercio',
    description: 'Comércio' 
  }, {
    value: 'industria',
    description: 'Indústria' 
  }, {
    value: 'servicos',
    description: 'Serviços' 
  }];

  phoneType: any = [{
    value: 1,
    description: 'Telefone fixo'
  }, {
    value: 2,
    description: 'Celular'
  }, {
    value: 3,
    description: 'Fax'
  }, {
    value: 4,
    description: 'Contato'
  }]

  productArea = [{
    value: 1,
    description: 'Produto 1',
    subgroups: [1,3]
  }, {
    value: 2,
    description: 'Produto 2',
    subgroups: [1,2]
  }, {
    value: 3,
    description: 'Produto 3',
    subgroups: [2]
  }, {
    value: 4,
    description: 'Produto 4',
    subgroups: [4]
  }]

  socialMedias: any = [{
    value: 'facebook',
    description: 'Facebook'
  }, {
    value: 'instagram',
    description: 'Instagram'
  }, {
    value: 'twitter',
    description: 'Twitter'
  }, {
    value: 'linkedin',
    description: 'Linkedin'
  }, {
    value: 'googleplus',
    description: 'Google+'
  }];

  states: any = [{
    value: 'ac',
    description: 'ACRE' 
  }, {
    value: 'al',
    description: 'ALAGOAS' 
  }, {
    value: 'ap',
    description: 'AMAPÁ' 
  }, {
    value: 'a,',
    description: 'AMAZONAS' 
  }, {
    value: 'ba',
    description: 'BAHIA' 
  }, {
    value: 'ce',
    description: 'CEARÁ' 
  }, {
    value: 'df',
    description: 'DISTRITO FEDERAL' 
  }, {
    value: 'es',
    description: 'ESPÍRITO SANTO' 
  }, {
    value: 'go',
    description: 'GOIÁS' 
  }, {
    value: 'ma',
    description: 'MARANHÃO' 
  }, {
    value: 'mt',
    description: 'MATO GROSSO' 
  }, {
    value: 'ms',
    description: 'MATO GROSSO DO SUL' 
  }, {
    value: 'mg',
    description: 'MINAS GERAIS' 
  }, {
    value: 'pa',
    description: 'PARÁ' 
  }, {
    value: 'pb',
    description: 'PARAÍBA' 
  }, {
    value: 'pr',
    description: 'PARANÁ' 
  }, {
    value: 'pe',
    description: 'PERNAMBUCO' 
  }, {
    value: 'pi',
    description: 'PIAUÍ' 
  }, {
    value: 'rj',
    description: 'RIO DE JANEIRO' 
  }, {
    value: 'rn',
    description: 'RIO GRANDE DO NORTE' 
  }, {
    value: 'rs',
    description: 'RIO GRANDE DO SUL' 
  }, {
    value: 'ro',
    description: 'RONDÔNIA' 
  }, {
    value: 'rr',
    description: 'RORAIMA' 
  }, {
    value: 'sc',
    description: 'SANTA CATARINA' 
  }, {
    value: 'sp',
    description: 'SÃO PAULO' 
  }, {
    value: 'se',
    description: 'SERGIPE' 
  }, {
    value: 'to',
    description: 'TOCANTINS' 
  }];

  subgroupArea = [{
    value: 1,
    description: 'Setor 1'
  }, {
    value: 2,
    description: 'Setor 2'
  }, {
    value: 3,
    description: 'Setor 3'
  }, {
    value: 4,
    description: 'Setor 4'
  }]

  constructor(public outsidersService: OutsidersService) {
    /*md-select countries: start*/
    this.americaNorte = this.onCheckContinent('América do Norte');
    this.americaSul = this.onCheckContinent('América do Sul');
    this.africa = this.onCheckContinent('África');
    this.antartida = this.onCheckContinent('Antártida');
    this.asia = this.onCheckContinent('Ásia');
    this.europa = this.onCheckContinent('Europa');
    this.oceania = this.onCheckContinent('Oceania');
    /*md-select countries: end*/
  }
  
  /*Activity: start*/
  filterProduct = (event) => {
    if(event.value.length > 0) {
      this.productObject = [{}];
      
      let productsArray = [];
      let finalArray = [];
      for(let lim = event.value.length, i = 0; i < lim; i++) {
        for(let lim2 = this.productArea.length, j =0; j < lim2; j++) {
          for(let lim3 = this.productArea[j].subgroups.length, k = 0; k < lim3; k++) {
            if(event.value[i] == this.productArea[j].subgroups[k]) {
              productsArray.push(this.productArea[j].value);
            }
          }
        }
      }

      finalArray = productsArray.filter(function(item, pos) {
        return productsArray.indexOf(item) == pos;
      })
      
      for(let lim = this.productArea.length, i =0; i < lim; i++) {
        for(let lim2 = finalArray.length, j =0; j < lim2; j++) {
          if(this.productArea[i].value == finalArray[j]) {          
            this.productObject.push({
              description: this.productArea[i].description,
              value: this.productArea[i].value
            });
          }
        }
      }

      this.productObject.shift();
    } else {
      this.productObject = undefined;
    }
  }
  /*Activity: end*/

  /*Contact phones: start*/
  clearContactPhone = (index) => {
    console.log(index);
    console.log(this.companyPhoneObject);
    this.companyPhoneObject.splice(index, 1);
  }

  createContactPhoneObject = () => {
    this.companyPhoneObject.push({
      phone_type_id: this.companyPhoneTypeChanged,
      country_code: "+55",
      ddd: this.companyPhoneDDDChanged,
      number: this.companyPhoneNumberChanged
    })
    console.log(this.companyPhoneObject)
    this.companyPhoneTypeChanged = undefined;
    //this.form.value.contact.;
  }

  onChangeCompanyPhoneDDD = (event) => {
    if(event) {
      this.companyPhoneDDDChanged = event.srcElement.value;

      if(this.companyPhoneNumberChanged) {
        if(this.companyPhoneNumberChanged.length > 7) {
          this.createContactPhoneObjectButton = true;
        } else {
          this.createContactPhoneObjectButton = false;
        }
      }
    }
  }

  onChangeCompanyPhoneNumber = (event) => {
    if(event) {
      this.companyPhoneNumberChanged = event.srcElement.value;

      if(this.companyPhoneDDDChanged) {
        if(this.companyPhoneNumberChanged.length > 7 && this.companyPhoneDDDChanged.length > 1) {
          this.createContactPhoneObjectButton = true;
        } else {
          this.createContactPhoneObjectButton = false;
        }
      }
    }
  }

  onChangeCompanyPhoneType = (event) => {
    if(event.value) {      
      this.companyPhoneTypeChanged = event.value;
      console.log(this.companyPhoneTypeChanged);
    }
  }
  /*Contact phones: end*/

  /*Representative: start*/
  onChangeRepresentativeName = (event) => {
    if(event) {
      this.represenativeName = event.srcElement.value;

      if(this.represenativeEmail && this.represenativePosition) {
        if(this.represenativeEmail.length > 3 && this.represenativePosition.length > 1) {
          this.createRepresentativeObjectButton = true;
        } else {
          this.createRepresentativeObjectButton = false;
        }
      }
    }
  }

  onChangeRepresentativePosition = (event) => {
    if(event) {
      this.represenativePosition = event.srcElement.value;

      if(this.represenativeEmail && this.represenativeName) {
        if(this.represenativeEmail.length > 3 && this.represenativeName.length > 2) {
          this.createRepresentativeObjectButton = true;
        } else {
          this.createRepresentativeObjectButton = false;
        }
      }
    }
  }

  onChangeRepresentativeEmail = (event) => {
    if(event) {
      this.represenativeEmail = event.srcElement.value;

      if(this.represenativeName && this.represenativePosition) {
        if(this.represenativeName.length > 2 && this.represenativePosition.length > 1) {
          console.log(286);
          this.createRepresentativeObjectButton = true;
        } else {
          this.createRepresentativeObjectButton = false;
        }
      }
    }
  }

  createRepresentativeObject = () => {
    this.representativeObject.push({
      name: this.represenativeName,
      position: this.represenativePosition,
      email: this.represenativeEmail,
      phones: this.representativePhoneObject,
      socialMedias: this.representativeSocialMediaObject
    })

    console.log(this.representativeObject);
  }
  /*Representative: end*/

  /*Representative phones: start*/
  clearRepresentativePhone = (index) => {
    this.representativePhoneObject.splice(index, 1);
  }

  createRepresentativePhoneObject = () => {
    this.representativePhoneObject.push({
      phone_type_id: this.representativePhoneTypeChanged,
      country_code: "+55",
      ddd: this.representativePhoneDDDChanged,
      number: this.representativePhoneNumberChanged
    })
    this.representativePhoneTypeChanged = undefined;
    //this.form.value.contact.;
  }

  onChangeRepresentativePhoneDDD = (event) => {
    if(event) {
      this.representativePhoneDDDChanged = event.srcElement.value;

      if(this.representativePhoneNumberChanged) {
        if(this.representativePhoneNumberChanged.length > 7) {
          this.createRepresentativePhoneObjectButton = true;
        } else {
          this.createRepresentativePhoneObjectButton = false;
        }
      }
    }
  }

  onChangeRepresentativePhoneNumber = (event) => {
    if(event) {
      this.representativePhoneNumberChanged = event.srcElement.value;

      if(this.representativePhoneDDDChanged) {
        if(this.representativePhoneNumberChanged.length > 7 && this.representativePhoneDDDChanged.length > 1) {
          this.createRepresentativePhoneObjectButton = true;
        } else {
          this.createRepresentativePhoneObjectButton = false;
        }
      }
    }
  }

  onChangeRepresentativePhoneType = (event) => {
    console.log(event);
    if(event.value) {      
      this.representativePhoneTypeChanged = event.value;
      console.log(this.representativePhoneTypeChanged);
    }
  }
  /*Representative phones: end*/

  /*Representative social medias: start*/
  clearRepresentativeSocialMedia = (index) => {
    this.representativeSocialMediaObject.splice(index, 1);
  }

  createRepresentativeSocialMediaObject = () => {
    this.representativeSocialMediaObject.push({
      digital_data_type: this.representativeSocialMediaTypeChanged,
      url: this.representativeSocialMediaURLChanged
    })
    console.log(this.representativeSocialMediaObject)
    this.representativeSocialMediaTypeChanged = undefined;
  }

  onChangeRepresentativeSocialMediaURL = (event) => {
    if(event) {
      this.representativeSocialMediaURLChanged = event.srcElement.value;

      this.createRepresentativeSocialMediaObjectButton = true;
    }
  }

  onChangeRepresentativeSocialMediaType = (event) => {
    if(event.value) {      
      this.representativeSocialMediaTypeChanged = event.value;
    }
  }
  /*Representative social medias: end*/

  /*Share it?: start*/
  createNewObjectFromArrayOfObjects = (objectsArray: any) => {
    let newObject = {};
    for(let lim = objectsArray.length, i= 0; i < lim; i++) {
      for(let key in objectsArray[i]) {
        if(objectsArray[i][key] != undefined && objectsArray[i][key] != null) {
          newObject[key] = objectsArray[i][key];
        } else {
          newObject[key] = null;
        }
      }
    }

    console.log(newObject);
  }

  republicaVirtualCep = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);

      console.log(this.addressObject)
    });
  }

  receitaWsCnpj = (event) => {
    let cnpj = event.srcElement.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaWsCnpjSearch(cnpj)
    .then(res => {
      console.log(res)
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);

      console.log(this.addressObject)
    });
  }
  /*Share it?: end*/
  
  onChangeMarket = (event) => {
    this.marketChanged = event.checked;
    console.log(this.marketChanged);
  }

  onCheckContinent = (continent) => {
    let country = [], j = 0;

    for(let lim = countries.length, i =0; i < lim; i++) {
      if(countries[i].continente === continent) {
        country[j] = {description: countries[i].nome_pais} 
        j++;
      }
    }

    return country;
  }

  onSubmit = () => {
    let representativesObject = {
      representatives: this.representativeObject
    }

    let phonesObject = {
      phones: this.companyPhoneObject
    }

    this.createNewObjectFromArrayOfObjects([
      this.form.value.contact, 
      this.form.value.company, 
      this.form.value.activity, 
      this.form.value.market, 
      this.form.value.representative,
      phonesObject,
      representativesObject
    ]);
  }
}
