import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { MdSnackBar, MdSelectModule } from '@angular/material';

import { brazilianStates } from './data/brazilian-states';
import { countries } from './data/countries';
import { selects } from './data/selects';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe.js'

/*Services*/
import { CrudService } from './shared/services/crud.service';
import { OutsidersService } from './shared/services/outsiders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myForm') form: NgForm;

  countries: any = countries;

  signupForm: FormGroup;
  
  states: any = brazilianStates;

  objectToAPI: any;

  /*activity products by subgroup trouble: start*/
  productObject: any;
  subgroupObject: any;
  /*activity products by subgroup trouble: end*/
  
  /*company: start*/
  companyObject: any;
  companyBusiness: number;
  companySize: string;
  /*company: end*/

  /*company address trouble: start*/
  addressObject: any;
  /*company address trouble: start*/
  
  /*company phone trouble: start*/
  companyPhoneObject: any = [];
  createContactPhoneObjectButton: boolean = false;
  /*company phone trouble: end*/

  /*representative phone trouble: start*/
  representativePhoneObject: any = [];
  representativeAddressObject: any;
  createRepresentativePhoneObjectButton: boolean = false;
  /*company phone trouble: end*/

  /*representative revenues trouble: start*/
  representativeRevenuesObject: any = [];

  representativeLocalRevenuesChanged: any;
  createRepresentativeLocalRevenuesObjectButton: boolean = false;

  statesBusinessChanged: string;
  representativeOtherStateRevenuesChanged: any;
  createRepresentativeOtherStateRevenuesObjectButton: boolean = false;

  countriesBusinessChanged: string;
  representativeOtherCountryRevenuesChanged: any;
  createRepresentativeOtherCountryRevenuesObjectButton: boolean = false;
  /*representative revenues trouble: end*/

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

  groups: any = [];
  subgroups: any = [];
  products: any = [];

  mask: any = {
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/,'-', /\d/,/\d/],
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/, /\d/],
    date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    zip: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
    cell_phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,]
  };

  //SELECTS values
  phoneType: any = selects[0].phoneType;
  socialMedias: any = selects[0].socialMedias;
  treatments: any = selects[0].treatment;
  schooling: any = selects[0].schooling;

  constructor(
    public outsidersService: OutsidersService,
    public crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.readArray('laravel', {
      route: 'groups?noPaginate=true'
    })
    .then(res => {
      let temp;
      temp = res;
      this.groups = temp.obj;
    });

    this.crud.readArray('laravel', {
      route: 'subgroups'
    })
    .then(res => {
      let temp;
      temp = res;
      this.subgroups = temp.obj;
    });

    this.crud.readArray('laravel', {
      route: 'products'
    })
    .then(res => {
      console.log(res)
      let temp;
      temp = res;
      this.products = temp.obj;
    });

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
      'company_interests': new FormControl(null),
      'sales_capacity': new FormControl(null),
      'representative_phone_type': new FormControl(null),
      'representative_phone_ddd': new FormControl(null),
      'representative_phone_number': new FormControl(null),
      'company_phone_type': new FormControl(null),
      'company_phone_ddd': new FormControl(null),
      'company_phone_number': new FormControl(null),
      'representative_treatment': new FormControl(null),
      'representative_cpf': new FormControl(null),
      'representative_name': new FormControl(null),
      'representative_position': new FormControl(null),
      'representative_birthday': new FormControl(null),
      'representative_schooling': new FormControl(null),
      'representative_email': new FormControl(null),
      'representative_postal_code': new FormControl(null),
      'representative_address': new FormControl(null),
      'representative_city': new FormControl(null),
      'representative_state': new FormControl(null)
    })
  }

  onChangeCompanyBusiness = (event) => {
    if(event) {
      this.companyBusiness = event.value;
    } else {
      this.companyBusiness = undefined;
    }
  }

  /*Activity: start*/
  filterProduct = (event) => {
    if(event.value.length > 0) {
      this.productObject = [{}];
      
      let productsArray = [];
      let finalArray = [];
      for(let lim = this.products.length, i = 0; i < lim; i++) { //subgroups iteration
        for(let lim2 = event.value.length, j =0; j < lim2; j++) { //products iteration          
          if(event.value[j] == this.products[i].subgroup_id) {
            productsArray.push(this.products[i]);
          }
        }
      }

      this.productObject = productsArray;
      
    } else {
      this.productObject = undefined;
    }
  }

  filterSubgroup = (event) => {
    console.log(this.subgroups)
    if(event.value.length > 0) {
      this.subgroupObject = [{}];
      
      let subgroupsArray = [];
      let finalArray = [];
      for(let lim = this.subgroups.length, i = 0; i < lim; i++) { //groups iteration
        for(let lim2 = event.value.length, j =0; j < lim2; j++) { //subgroups iteration
          console.log(this.subgroups[j].group_id);
          if(event.value[j] == this.subgroups[i].group_id) {
            subgroupsArray.push(this.subgroups[i]);
          }
        }
      }

      this.subgroupObject = subgroupsArray;
      
    } else {
      this.subgroupObject = undefined;
    }
  }
  /*Activity: end*/

  /*Contact phones: start*/
  clearContactPhone = (index) => {
    this.companyPhoneObject.splice(index, 1);
  }

  createContactPhoneObject = () => {
    this.companyPhoneObject.push({
      phone_type_id: this.signupForm.controls['company_phone_type'].value,
      country_code: "+55",
      ddd: this.signupForm.controls['company_phone_ddd'].value,
      number: this.signupForm.controls['company_phone_number'].value
    })

    this.signupForm.controls['company_phone_type'].patchValue(null);
    this.signupForm.controls['company_phone_ddd'].patchValue(null);
    this.signupForm.controls['company_phone_number'].patchValue(null);
  }  
  /*Contact phones: end*/

  /*Representative: start*/
  clearRepresentative = (index) => {
    this.representativeObject.splice(index, 1);
  }

  createRepresentativeObject = () => {
    this.representativeObject.push({
      cpf: this.signupForm.controls['representative_cpf'].value,
      treatment: this.signupForm.controls['representative_treatment'].value,
      name: this.signupForm.controls['representative_name'].value,
      position: this.signupForm.controls['representative_position'].value,
      email: this.signupForm.controls['representative_email'].value,
      phones: this.representativePhoneObject,
      birthday: this.signupForm.controls['representative_birthday'].value,
      schooling: this.signupForm.controls['representative_schooling'].value,
      postal_code: this.signupForm.controls['representative_postal_code'].value,
      address: this.signupForm.controls['representative_address'].value,
      city: this.signupForm.controls['representative_city'].value,
      state: this.signupForm.controls['representative_state'].value
    })

    this.signupForm.controls['representative_cpf'].patchValue(null),
    this.signupForm.controls['representative_treatment'].patchValue(null),
    this.signupForm.controls['representative_name'].patchValue(null),
    this.signupForm.controls['representative_position'].patchValue(null),
    this.signupForm.controls['representative_email'].patchValue(null),
    this.signupForm.controls['representative_birthday'].patchValue(null),
    this.signupForm.controls['representative_schooling'].patchValue(null),
    this.signupForm.controls['representative_postal_code'].patchValue(null),
    this.signupForm.controls['representative_address'].patchValue(null),
    this.signupForm.controls['representative_city'].patchValue(null),
    this.signupForm.controls['representative_state'].patchValue(null)
  }
  /*Representative: end*/

  /*Representative phones: start*/
  clearRepresentativePhone = (index) => {
    this.representativePhoneObject.splice(index, 1);
  }

  createRepresentativePhoneObject = () => {
    this.representativePhoneObject.push({
      phone_type_id: this.signupForm.controls['representative_phone_type'].value,
      country_code: "+55",
      ddd: this.signupForm.controls['representative_phone_ddd'].value,
      number: this.signupForm.controls['representative_phone_number'].value,
    });
    this.signupForm.controls['representative_phone_type'].patchValue(null);
    this.signupForm.controls['representative_phone_ddd'].patchValue(null);
    this.signupForm.controls['representative_phone_number'].patchValue(null);
  }
  /*Representative phones: end*/

  /*Representative revenues: start*/
  onChangeRepresentativeLocalRevenues = (event) => {
    if(event) {
      console.log(event.srcElement.value);
      this.representativeLocalRevenuesChanged = event.srcElement.value;
      this.createRepresentativeLocalRevenuesObjectButton = true;
    }
  }

  createLocalRevenuesObject = () => {
    this.representativeRevenuesObject.push({
      place_type: 'local',
      place: 'local',
      revenues: this.representativeLocalRevenuesChanged
    })
    this.representativeLocalRevenuesChanged = undefined;

    console.log(this.representativeRevenuesObject);
  }

  clearRepresentativeLocalRevenues = (index) => {
    this.representativeLocalRevenuesChanged.splice(index, 1);
  }

  onChangeStatesBusiness = (event) => {
    this.statesBusinessChanged = event.value;
  }

  onChangeRepresentativeOtherStateRevenues = (event) => {
    if(event) {
      console.log(event.srcElement.value);
      this.representativeOtherStateRevenuesChanged = event.srcElement.value;
      this.createRepresentativeOtherStateRevenuesObjectButton = true;
    }
  }

  createOtherStateRevenuesObject = () => {
    this.representativeRevenuesObject.push({
      place_type: 'brazilian_state',
      place: this.statesBusinessChanged,
      revenues: this.representativeOtherStateRevenuesChanged
    })
    this.representativeOtherStateRevenuesChanged = undefined;

    console.log(this.representativeRevenuesObject);
  }

  clearRepresentativeOtherStateRevenues = (index) => {
    this.representativeOtherStateRevenuesChanged.splice(index, 1);
  }

  onChangeCountriesBusiness = (event) => {
    this.countriesBusinessChanged = event.value;
  }

  onChangeRepresentativeOtherCountryRevenues = (event) => {
    if(event) {
      console.log(event.srcElement.value);
      this.representativeOtherCountryRevenuesChanged = event.srcElement.value;
      this.createRepresentativeOtherCountryRevenuesObjectButton = true;
    }
  }

  createOtherCountryRevenuesObject = () => {
    this.representativeRevenuesObject.push({
      place_type: 'country',
      place: this.countriesBusinessChanged,
      revenues: this.representativeOtherCountryRevenuesChanged
    })
    this.representativeOtherCountryRevenuesChanged = undefined;

    console.log(this.representativeRevenuesObject);
  }

  clearRepresentativeOtherCountryRevenues = (index) => {
    this.representativeOtherCountryRevenuesChanged.splice(index, 1);
  }
  /*Representative revenues: end*/

  
  /*Representative social medias: start*/
  clearRepresentativeSocialMedia = (index) => {
    this.representativeSocialMediaObject.splice(index, 1);
  }

  createRepresentativeSocialMediaObject = () => {
    this.representativeSocialMediaObject.push({
      digital_data_type: this.representativeSocialMediaTypeChanged,
      url: this.representativeSocialMediaURLChanged
    })
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

  republicaVirtualCepToRepresentative = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.representativeAddressObject = JSON.parse(object._body);

      this.signupForm.controls['representative_address'].patchValue(this.representativeAddressObject.logradouro);
      this.signupForm.controls['representative_city'].patchValue(this.representativeAddressObject.cidade);
      this.signupForm.controls['representative_state'].patchValue(this.representativeAddressObject.uf);
    });
  }

  receitaWsCnpj = (event) => {
    let cnpj = event.srcElement.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaWsCnpjSearch(cnpj)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.companyObject = JSON.parse(object._body);
      console.log(this.companyObject);

      this.signupForm.controls['business_name'].patchValue(this.companyObject.nome);
      this.signupForm.controls['tranding_name'].patchValue(this.companyObject.fantasia);
      this.signupForm.controls['foundation_year'].patchValue(this.companyObject.abertura);
      this.signupForm.controls['postal_code'].patchValue(this.companyObject.cep);
      this.signupForm.controls['address'].patchValue(this.companyObject.logradouro);
      this.signupForm.controls['number'].patchValue(this.companyObject.numero);
      this.signupForm.controls['district'].patchValue(this.companyObject.bairro);
      this.signupForm.controls['city'].patchValue(this.companyObject.municipio);
      this.signupForm.controls['state'].patchValue(this.companyObject.uf);

      if(this.companyObject.capital_social) {
        let number = Number(this.companyObject.capital_social);
        let size;
        if(number < 60000) {
          size = "mei";
        } else if(number < 360000) {
          size = "micro";
        } else {
          size = "pequena";
        }

        this.signupForm.controls.company_size.patchValue(size);
      }
    });
  }
  /*Share it?: end*/
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
