import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
//import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { countries } from './data/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') form: NgForm;

  marketChanged: boolean = false;
  objectToAPI: any;
  /*company phone trouble: start*/
  companyPhoneTypeChanged: number;
  companyPhoneNumberChanged: string;
  companyPhoneDDDChanged: string;
  companyPhoneObject: any = [];
  createContactPhoneObjectButton: boolean = false;
  /*company phone trouble: end*/

  /*md-select countries: start*/
  africa: any;
  americaNorte: any;
  americaSul: any;
  antartida: any;
  asia: any;
  europa: any;
  oceania: any;
  /*md-select countries: end*/
  
  //SELECTS values
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

  constructor() {
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

  /*Contact phones: start*/
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
    if(this.companyPhoneObject.length > 0) {
      this.createNewObjectFromArrayOfObjects([
        this.form.value.contact, 
        this.form.value.company, 
        this.form.value.activity, 
        this.form.value.market, 
        this.form.value.representative,
        this.companyPhoneObject
      ]);
    } else {
      this.createNewObjectFromArrayOfObjects([
        this.form.value.contact, 
        this.form.value.company, 
        this.form.value.activity, 
        this.form.value.market, 
        this.form.value.representative
      ]);
    }
  }
}
