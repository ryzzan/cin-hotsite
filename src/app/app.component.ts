import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { brazilianStates } from './data/brazilian-states';
import { countries } from './data/countries';
import { selects } from './data/selects';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe.js'

/*Services*/
import { OutsidersService } from './shared/services/outsiders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myForm') form: NgForm;

  signupForm: FormGroup;
  
  states: any = brazilianStates;

  marketChanged: boolean = false;
  objectToAPI: any;

  /*activity products by subgroup trouble: start*/
  productObject: any;
  /*activity products by subgroup trouble: end*/
  
  /*company: start*/
  companyBusiness: number;
  /*company: end*/

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
  representativeCPF: string;
  representativePhoneTypeChanged: number;
  representativePhoneNumberChanged: string;
  representativePhoneDDDChanged: string;
  representativePhoneObject: any = [];
  representativeBirthday: any;
  representativeSchooling: any;
  createRepresentativePhoneObjectButton: boolean = false;
  /*company phone trouble: end*/

  /*representative social media trouble: start*/
  representativeSocialMediaTypeChanged: number;
  representativeSocialMediaURLChanged: string;
  representativeSocialMediaObject: any = [];
  createRepresentativeSocialMediaObjectButton: boolean = false;
  /*company social media trouble: end*/

  /*representative: start*/
  representativeTreatment: string;
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
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/, /\d/],
    date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    zip: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
    cell_phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,]
  };

  //SELECTS values
  maturityArea: any = selects[0].maturityArea;
  comercialArea: any = selects[0].comercialArea;
  phoneType: any = selects[0].phoneType;
  productArea: any = selects[0].productArea;
  socialMedias: any = selects[0].socialMedias;
  subgroupArea: any = selects[0].subgroupArea;
  treatments: any = selects[0].treatment;
  schooling: any = selects[0].schooling;

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

  ngOnInit() {
    console.log(this.treatments)
    this.signupForm = new FormGroup({
      'cnpj_number': new FormControl(null),
      'business_name': new FormControl(null),
      'tranding_name': new FormControl(null),
      'foundation_year': new FormControl(null),
      'employees_quantity': new FormControl(null),
      'legal_person': new FormControl(null),
      'company_size': new FormControl(null),
      'postal_code': new FormControl(null),
      'address': new FormControl(null),
      'number': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(null),
      'district': new FormControl(null),
      'complement': new FormControl(null),
      'company_email': new FormControl(null),
      'company_site': new FormControl(null),
      'group_id': new FormControl(null),
      'subgroup_id': new FormControl(null),
      'product_id': new FormControl(null),
      'participation_events': new FormControl(null),
      'company_interests': new FormControl(null)
    })
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

  onChangeCompanyBusiness = (event) => {
    if(event) {
      this.companyBusiness = event.value;
    } else {
      this.companyBusiness = undefined;
    }
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
  onChangeRepresentativeCPF = (event) => {
    this.representativeCPF = event.srcElement.value;
  }

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

  onChangeRepresenativeTreatment = (event) => {
    this.representativeTreatment = event.value;
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
          this.createRepresentativeObjectButton = true;
        } else {
          this.createRepresentativeObjectButton = false;
        }
      }
    }
  }

  onChangeRepresentativeBirthday = (event) => {
    this.representativeBirthday = event.srcElement.value;
  }

  onChangeRepresentativeSchooling = (event) => {
    this.representativeSchooling = event.value;
  }

  createRepresentativeObject = () => {
    this.representativeObject.push({
      cpf: this.representativeCPF,
      treatment: this.representativeTreatment,
      name: this.represenativeName,
      position: this.represenativePosition,
      email: this.represenativeEmail,
      phones: this.representativePhoneObject,
      socialMedias: this.representativeSocialMediaObject,
      birthday: this.representativeBirthday,
      schooling: this.representativeSchooling
    })
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
