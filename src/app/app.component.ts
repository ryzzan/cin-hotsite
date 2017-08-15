import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { MdSnackBar, MdSelectModule } from '@angular/material';

import { brazilianStates } from './data/brazilian-states';
import { countries } from './data/countries';
import { selects } from './data/selects';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe.js'

/*Services*/
import { CrudService } from './shared/services/crud.service';
import { OutsidersService } from './shared/services/outsiders.service';

/**
 * Validators
 */
import { MyValidators } from './shared/validators/my-validators';

/**rxjs */
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myForm') form: NgForm;

  countries: any = countries;
  signupForm: FormGroup;
  buyerSignupForm: FormGroup;
  states: any = brazilianStates;
  objectToAPI: any;
  errors: any = [];

  /*activity products by subgroup trouble: start*/
  subgroupChanged: boolean = false;
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
  languages: any = selects[0].languages;

  filteredCountries: any;

  constructor(
    public outsidersService: OutsidersService,
    public crud: CrudService,
    public validator: MyValidators
  ) { 
    this.signupForm = new FormGroup({
      'company': new FormGroup({
        'cnpj_number': new FormControl(null, Validators.required),
        'business_name': new FormControl(null, Validators.required),
        'tranding_name': new FormControl(null, Validators.required),
        'foundation_year': new FormControl(null, Validators.required),
        'employees_quantity': new FormControl(null, Validators.required),
        'legal_person': new FormControl(null, Validators.required),
        'company_size': new FormControl(null, Validators.required),
      }),
      'contact': new FormGroup({
        'postal_code': new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required),
        'number': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required),
        'district': new FormControl(null, Validators.required),
        'company_email': new FormControl(null, Validators.required),
        'company_site': new FormControl(null),
        'company_social_media': new FormControl(null),
        'company_phone_type': new FormControl(null), //Validar pelo objeto
        'company_phone_ddd': new FormControl(null),
        'company_phone_number': new FormControl(null),        
      }),      
      'representative': new FormGroup({
        'representative_treatment': new FormControl(null),//Validar pelo objeto
        'representative_cpf': new FormControl(null),
        'representative_name': new FormControl(null),
        'representative_position': new FormControl(null),
        'representative_birthday': new FormControl(null),
        'representative_schooling': new FormControl(null),
        'representative_email': new FormControl(null),
        'representative_postal_code': new FormControl(null),
        'representative_address': new FormControl(null),
        'representative_city': new FormControl(null),
        'representative_state': new FormControl(null),
        'representative_phone_type': new FormControl(null),
        'representative_phone_ddd': new FormControl(null),
        'representative_phone_number': new FormControl(null),
      }),
      'interest': new FormGroup({
        'company_interests': new FormControl(null),
        'participation_events': new FormControl(null),
        'revenues_country': new FormControl(null),
        'sales_capacity': new FormControl(null),
      }),
      'activity': new FormGroup({
        'group_id': new FormControl(null, Validators.required),
        'subgroup_id': new FormControl(null, Validators.required),
        'product_id': new FormControl(null, Validators.required),
      })
    })

    this.buyerSignupForm = new FormGroup({
      'company': new FormGroup({
        'cnpj_number': new FormControl(null, Validators.required),
        'business_name': new FormControl(null, Validators.required),
        'tranding_name': new FormControl(null, Validators.required),
        'foundation_year': new FormControl(null, Validators.required),
        'employees_quantity': new FormControl(null, Validators.required),
        'legal_person': new FormControl(null, Validators.required),
        'language': new FormControl(null, Validators.required),
      }),
      'contact': new FormGroup({
        'country': new FormControl(null, Validators.required),
        'postal_code': new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required),
        'number': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required),
        'district': new FormControl(null, Validators.required),
        'company_email': new FormControl(null, Validators.required),
        'company_site': new FormControl(null),
        'company_social_media': new FormControl(null),
        'company_phone_type': new FormControl(null), //Validar pelos objetos que serão gerados
        'company_phone_ddd': new FormControl(null),
        'company_phone_number': new FormControl(null),        
      }),      
      'representative': new FormGroup({
        'representative_treatment': new FormControl(null), //Validar pelos objetos que serão gerados
        'representative_cpf': new FormControl(null),
        'representative_name': new FormControl(null),
        'representative_position': new FormControl(null),
        'representative_birthday': new FormControl(null),
        'representative_schooling': new FormControl(null),
        'representative_email': new FormControl(null),
        'representative_postal_code': new FormControl(null),
        'representative_address': new FormControl(null),
        'representative_city': new FormControl(null),
        'representative_state': new FormControl(null),
        'representative_phone_type': new FormControl(null), //Validar pelos objetos que serão gerados
        'representative_phone_ddd': new FormControl(null),
        'representative_phone_number': new FormControl(null),
      }),
      'interest': new FormGroup({
        'company_interests': new FormControl(null),
        'partner_profile': new FormControl(null),
        'participation_events': new FormControl(null),
        'revenues_country': new FormControl(null),
        'sales_capacity': new FormControl(null),
      }),
      'activity': new FormGroup({
        'subgroup_id': new FormControl(null, Validators.required),
        'product_id': new FormControl(null, Validators.required),
      })
    })
    
    this.filteredCountries =  this.countries;
  }

  ngOnInit() {
    this.companyBusiness = 1;

    this.crud.readArray('laravel', {
      route: 'groups?noPaginate=true'
    })
    .then(res => {
      let temp;
      temp = res;
      this.groups = temp.obj;
    });

    this.crud.readArray('laravel', {
      route: 'subgroups?where[group_id]=1'
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
      let temp;
      temp = res;
      this.products = temp.obj;
    });
  }

  filterCountries(val) {
    let r = val.srcElement.value;
    
    if(val != null) {
      this.filteredCountries = this.countries.filter(s => s.country_name_pt.toLowerCase().indexOf(r.toLowerCase()) === 0)
    } else {
      this.filteredCountries = this.countries;
    }
    
    return this.filteredCountries;
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

  onChangeSubgroup = (event) => {
    this.subgroupChanged = false;
    this.errors = this.removeObjectFromObjectArrayByPropertyValue(this.errors, 'code', 'err-submes');

    if(event.value.length > 0) {
      for(let lim=event.value.length, i = 0; i < lim; i++) {
        if(event.value[i] == 1) {
          this.subgroupChanged = true;
        }
      }

      if(!this.subgroupChanged) {
        this.errors.push({
          code: "err-submes",
          message: "Atividade - Ramos de Atividade: apenas membros da indústria podem participar do evento"
        });
      }
    }
  }
  /*Activity: end*/

  /*Seller Contact phones: start*/
  clearContactPhone = (index) => {
    this.companyPhoneObject.splice(index, 1);
  }

  createContactPhoneObject = () => {
    this.companyPhoneObject.push({
      phone_type_id: this.signupForm.get('contact.company_phone_type').value,
      country_code: "+55",
      ddd: this.signupForm.get('contact.company_phone_ddd').value,
      number: this.signupForm.get('contact.company_phone_number').value
    })

    this.signupForm.get('contact.company_phone_type').patchValue(null);
    this.signupForm.get('contact.company_phone_ddd').patchValue(null);
    this.signupForm.get('contact.company_phone_number').patchValue(null);
  }  
  /*Seller Contact phones: end*/

  /*Buyer Contact phones: start*/
  clearBuyerContactPhone = (index) => {
    this.companyPhoneObject.splice(index, 1);
  }

  createBuyerContactPhoneObject = () => {
    this.companyPhoneObject.push({
      phone_type_id: this.buyerSignupForm.get('contact.company_phone_type').value,
      country_code: "+55",
      ddd: this.buyerSignupForm.get('contact.company_phone_ddd').value,
      number: this.buyerSignupForm.get('contact.company_phone_number').value
    })

    this.buyerSignupForm.get('contact.company_phone_type').patchValue(null);
    this.buyerSignupForm.get('contact.company_phone_ddd').patchValue(null);
    this.buyerSignupForm.get('contact.company_phone_number').patchValue(null);
  }  
  /*Buyer Contact phones: end*/

  /*Seller Representative: start*/
  clearRepresentative = (index) => {
    this.representativeObject.splice(index, 1);
  }

  createRepresentativeObject = () => {
    this.representativeObject.push({
      cpf: this.signupForm.get('representative.representative_cpf').value,
      treatment: this.signupForm.get('representative.representative_treatment').value,
      name: this.signupForm.get('representative.representative_name').value,
      position: this.signupForm.get('representative.representative_position').value,
      email: this.signupForm.get('representative.representative_email').value,
      phones: this.representativePhoneObject,
      birthday: this.signupForm.get('representative.representative_birthday').value,
      schooling: this.signupForm.get('representative.representative_schooling').value,
      postal_code: this.signupForm.get('representative.representative_postal_code').value,
      address: this.signupForm.get('representative.representative_address').value,
      city: this.signupForm.get('representative.representative_city').value,
      state: this.signupForm.get('representative.representative_state').value
    })

    this.signupForm.get('representative.representative_cpf').patchValue(null),
    this.signupForm.get('representative.representative_treatment').patchValue(null),
    this.signupForm.get('representative.representative_name').patchValue(null),
    this.signupForm.get('representative.representative_position').patchValue(null),
    this.signupForm.get('representative.representative_email').patchValue(null),
    this.signupForm.get('representative.representative_birthday').patchValue(null),
    this.signupForm.get('representative.representative_schooling').patchValue(null),
    this.signupForm.get('representative.representative_postal_code').patchValue(null),
    this.signupForm.get('representative.representative_address').patchValue(null),
    this.signupForm.get('representative.representative_city').patchValue(null),
    this.signupForm.get('representative.representative_state').patchValue(null)
  }
  /*Seller Representative: end*/

  /*Buyer Representative: start*/
  clearBuyerRepresentative = (index) => {
    this.representativeObject.splice(index, 1);
  }

  createBuyerRepresentativeObject = () => {
    this.representativeObject.push({
      cpf: this.buyerSignupForm.get('representative.representative_cpf').value,
      treatment: this.buyerSignupForm.get('representative.representative_treatment').value,
      name: this.buyerSignupForm.get('representative.representative_name').value,
      position: this.buyerSignupForm.get('representative.representative_position').value,
      email: this.buyerSignupForm.get('representative.representative_email').value,
      phones: this.representativePhoneObject,
      birthday: this.buyerSignupForm.get('representative.representative_birthday').value,
      schooling: this.buyerSignupForm.get('representative.representative_schooling').value,
      postal_code: this.buyerSignupForm.get('representative.representative_postal_code').value,
      address: this.buyerSignupForm.get('representative.representative_address').value,
      city: this.buyerSignupForm.get('representative.representative_city').value,
      state: this.buyerSignupForm.get('representative.representative_state').value
    })

    this.buyerSignupForm.get('representative.representative_cpf').patchValue(null),
    this.buyerSignupForm.get('representative.representative_treatment').patchValue(null),
    this.buyerSignupForm.get('representative.representative_name').patchValue(null),
    this.buyerSignupForm.get('representative.representative_position').patchValue(null),
    this.buyerSignupForm.get('representative.representative_email').patchValue(null),
    this.buyerSignupForm.get('representative.representative_birthday').patchValue(null),
    this.buyerSignupForm.get('representative.representative_schooling').patchValue(null),
    this.buyerSignupForm.get('representative.representative_postal_code').patchValue(null),
    this.buyerSignupForm.get('representative.representative_address').patchValue(null),
    this.buyerSignupForm.get('representative.representative_city').patchValue(null),
    this.buyerSignupForm.get('representative.representative_state').patchValue(null)
  }
  /*Buyer Representative: end*/

  /*Seller Representative phones: start*/
  clearRepresentativePhone = (index) => {
    this.representativePhoneObject.splice(index, 1);
  }

  createRepresentativePhoneObject = () => {
    this.representativePhoneObject.push({
      phone_type_id: this.signupForm.get('representative.representative_phone_type').value,
      country_code: "+55",
      ddd: this.signupForm.get('representative.representative_phone_ddd').value,
      number: this.signupForm.get('representative.representative_phone_number').value,
    });
    this.signupForm.get('representative.representative_phone_type').patchValue(null);
    this.signupForm.get('representative.representative_phone_ddd').patchValue(null);
    this.signupForm.get('representative.representative_phone_number').patchValue(null);
  }
  /*Seller Representative phones: end*/

  /*Buyer Representative phones: start*/
  clearBuyerRepresentativePhone = (index) => {
    this.representativePhoneObject.splice(index, 1);
  }

  createBuyerRepresentativePhoneObject = () => {
    this.representativePhoneObject.push({
      phone_type_id: this.buyerSignupForm.get('representative.representative_phone_type').value,
      country_code: "+55",
      ddd: this.buyerSignupForm.get('representative.representative_phone_ddd').value,
      number: this.buyerSignupForm.get('representative.representative_phone_number').value,
    });
    this.buyerSignupForm.get('representative.representative_phone_type').patchValue(null);
    this.buyerSignupForm.get('representative.representative_phone_ddd').patchValue(null);
    this.buyerSignupForm.get('representative.representative_phone_number').patchValue(null);
  }
  /*Buyer Representative phones: end*/

  /*Representative revenues: start*/
  onChangeRepresentativeLocalRevenues = (event) => {
    if(event) {
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
  }

  clearRepresentativeLocalRevenues = (index) => {
    this.representativeLocalRevenuesChanged.splice(index, 1);
  }

  onChangeStatesBusiness = (event) => {
    this.statesBusinessChanged = event.value;
  }

  onChangeRepresentativeOtherStateRevenues = (event) => {
    if(event) {
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
  }

  clearRepresentativeOtherStateRevenues = (index) => {
    this.representativeOtherStateRevenuesChanged.splice(index, 1);
  }

  onChangeCountriesBusiness = (event) => {
    this.countriesBusinessChanged = event.value;
  }

  onChangeRepresentativeOtherCountryRevenues = (event) => {
    if(event) {
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

    this.crud.create('laravel', {route: 'registration'})
  }

  removeObjectFromObjectArrayByPropertyValue = (objectsArray: any, property: string, value: string) => {
    let newObject = objectsArray.filter(function(property) {
       property !== value;
    });

    return newObject;
  }

  republicaVirtualCep = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);
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

      this.signupForm.get('representative.representative_address').patchValue(this.representativeAddressObject.logradouro);
      this.signupForm.get('representative.representative_city').patchValue(this.representativeAddressObject.cidade);
      this.signupForm.get('representative.representative_state').patchValue(this.representativeAddressObject.uf);
    });
  }

  republicaVirtualBuyerCepToRepresentative = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.representativeAddressObject = JSON.parse(object._body);

      this.buyerSignupForm.get('representative.representative_address').patchValue(this.representativeAddressObject.logradouro);
      this.buyerSignupForm.get('representative.representative_city').patchValue(this.representativeAddressObject.cidade);
      this.buyerSignupForm.get('representative.representative_state').patchValue(this.representativeAddressObject.uf);
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

      this.signupForm.get('company.business_name').patchValue(this.companyObject.nome);
      this.signupForm.get('company.tranding_name').patchValue(this.companyObject.fantasia);
      this.signupForm.get('company.foundation_year').patchValue(this.companyObject.abertura);
      this.signupForm.get('contact.postal_code').patchValue(this.companyObject.cep);
      this.signupForm.get('contact.address').patchValue(this.companyObject.logradouro);
      this.signupForm.get('contact.number').patchValue(this.companyObject.numero);
      this.signupForm.get('contact.district').patchValue(this.companyObject.bairro);
      this.signupForm.get('contact.city').patchValue(this.companyObject.municipio);
      this.signupForm.get('contact.state').patchValue(this.companyObject.uf);

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

        this.signupForm.get('company.company_size').patchValue(size);
      }
    });
  }

  receitaWsBuyerCnpj = (event) => {
    let cnpj = event.srcElement.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaWsCnpjSearch(cnpj)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.companyObject = JSON.parse(object._body);

      this.buyerSignupForm.get('company.business_name').patchValue(this.companyObject.nome);
      this.buyerSignupForm.get('company.tranding_name').patchValue(this.companyObject.fantasia);
      this.buyerSignupForm.get('company.foundation_year').patchValue(this.companyObject.abertura);
      this.buyerSignupForm.get('contact.postal_code').patchValue(this.companyObject.cep);
      this.buyerSignupForm.get('contact.address').patchValue(this.companyObject.logradouro);
      this.buyerSignupForm.get('contact.number').patchValue(this.companyObject.numero);
      this.buyerSignupForm.get('contact.district').patchValue(this.companyObject.bairro);
      this.buyerSignupForm.get('contact.city').patchValue(this.companyObject.municipio);
      this.buyerSignupForm.get('contact.state').patchValue(this.companyObject.uf);

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

    console.log(phonesObject);
    
    this.createNewObjectFromArrayOfObjects([
      this.signupForm,
      phonesObject,
      representativesObject
    ]);
  }

  onBuyerSubmit = () => {
    let representativesObject = {
      representatives: this.representativeObject
    }

    let phonesObject = {
      phones: this.companyPhoneObject
    }
    
    this.createNewObjectFromArrayOfObjects([
      this.buyerSignupForm,
      phonesObject,
      representativesObject
    ]);
  }

  /*objectCheckGenericValidator(control: FormControl): {[s: string]: boolean} {
    if(this.companyBusiness == 2 && control.value != null) {
      console.log(this.companyBusiness)
      return { "validation": true };
    }
    console.log(this.companyBusiness)
    return null;
  }*/
}
