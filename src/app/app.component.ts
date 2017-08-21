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
  sellerSignupForm: FormGroup;
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
  companyBusiness: number = 1;
  companySize: string;
  /*company: end*/

  /*company address trouble: start*/
  addressObject: any;
  /*company address trouble: start*/
  
  /*company phone trouble: start*/
  companyPhoneObject: any = [];
  /*company phone trouble: end*/

  /*representative phone trouble: start*/
  representativePhoneObject: any = [];
  representativeAddressObject: any;
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
  companySocialMediaObject: any = [];
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
    cell_phone: ['(', /\d/, /\d/, ')',' ' , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,],
    uf: [/\w/,/\w/,]
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
    this.sellerSignupForm = new FormGroup({
      'company': new FormGroup({
        'cnpj_number': new FormControl(null, Validators.required),
        'business_name': new FormControl(null),
        'tranding_name': new FormControl(null),
        'foundation_year': new FormControl(null),
        'employees_quantity': new FormControl(null),
        'legal_person': new FormControl(null),
        'company_size': new FormControl(null),
        'language': new FormControl(null),
      }),
      'contact': new FormGroup({
        'country': new FormControl(null),
        'postal_code': new FormControl(null),
        'address': new FormControl(null),
        'number': new FormControl(null),
        'city': new FormControl(null),
        'state': new FormControl(null),
        'district': new FormControl(null),
        'company_email': new FormControl(null),
        'company_site': new FormControl(null),
        'digital_data_type': new FormControl(null),
        'company_social_media_url': new FormControl(null),
        'company_phone_type': new FormControl(null),
        'company_phone_ddd': new FormControl(null),
        'company_phone_number': new FormControl(null),        
      }),      
      'representative': new FormGroup({
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
        'representative_state': new FormControl(null),
        'representative_phone_type': new FormControl(null),
        'representative_phone_ddd': new FormControl(null),
        'representative_phone_number': new FormControl(null),
      }),
      'interest': new FormGroup({
        'company_interests': new FormControl(null),
        'partner_profile': new FormControl(null),
        'participation_events': new FormControl(null),
        'revenues_country': new FormControl(null),
        'sales_capacity': new FormControl(null),
        'local_revenues': new FormControl(null),
        'other_state': new FormControl(null),
        'other_state_revenues': new FormControl(null),
        'other_country': new FormControl(null),
        'other_country_revenues': new FormControl(null),
      }),
      'activity': new FormGroup({
        'group_id': new FormControl(null),
        'subgroup_id': new FormControl(null),
        'product_id': new FormControl(null),
      })
    })

    this.buyerSignupForm = new FormGroup({
      'company': new FormGroup({
        'cnpj_number': new FormControl(null, Validators.required),
        'business_name': new FormControl(null),
        'tranding_name': new FormControl(null),
        'foundation_year': new FormControl(null),
        'employees_quantity': new FormControl(null),
        'legal_person': new FormControl(null),
        'company_size': new FormControl(null),
        'language': new FormControl(null),
      }),
      'contact': new FormGroup({
        'country': new FormControl(null),
        'postal_code': new FormControl(null),
        'address': new FormControl(null),
        'number': new FormControl(null),
        'city': new FormControl(null),
        'state': new FormControl(null),
        'district': new FormControl(null),
        'company_email': new FormControl(null),
        'company_site': new FormControl(null),
        'digital_data_type': new FormControl(null),
        'company_social_media_url': new FormControl(null),
        'company_phone_type': new FormControl(null),
        'company_phone_ddd': new FormControl(null),
        'company_phone_number': new FormControl(null),        
      }),      
      'representative': new FormGroup({
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
        'representative_state': new FormControl(null),
        'representative_phone_type': new FormControl(null),
        'representative_phone_ddd': new FormControl(null),
        'representative_phone_number': new FormControl(null),
      }),
      'interest': new FormGroup({
        'company_interests': new FormControl(null),
        'partner_profile': new FormControl(null),
        'participation_events': new FormControl(null),
        'revenues_country': new FormControl(null),
        'sales_capacity': new FormControl(null),
        'local_revenues': new FormControl(null),
        'other_state': new FormControl(null),
        'other_state_revenues': new FormControl(null),
        'other_country': new FormControl(null),
        'other_country_revenues': new FormControl(null),
      }),
      'activity': new FormGroup({
        'group_id': new FormControl(null),
        'subgroup_id': new FormControl(null),
        'product_id': new FormControl(null),
      })
    })
    
    this.filteredCountries =  this.countries;
  }

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
    this.buyerSignupForm.reset();
    this.sellerSignupForm.reset();

    this.subgroupChanged = false;
    this.productObject = undefined;
    this.subgroupObject = undefined;

    this.companyObject = undefined;
    this.addressObject = undefined;
    this.companyPhoneObject = [];
    this.representativePhoneObject = [];
    this.representativeRevenuesObject = [];
    this.companySocialMediaObject = [];
    this.representativeObject = [];
    this.representativeRevenuesObject = [];
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

  /*Contact phones: start*/
  clearContactPhone = (index) => {
    this.companyPhoneObject.splice(index, 1);
  }

  createSellerContactPhoneObject = () => {
    this.companyPhoneObject.push({
      phone_type_id: this.sellerSignupForm.get('contact.company_phone_type').value,
      country_code: "+55",
      ddd: this.sellerSignupForm.get('contact.company_phone_ddd').value,
      number: this.sellerSignupForm.get('contact.company_phone_number').value
    })

    this.sellerSignupForm.get('contact.company_phone_type').patchValue(null);
    this.sellerSignupForm.get('contact.company_phone_ddd').patchValue(null);
    this.sellerSignupForm.get('contact.company_phone_number').patchValue(null);
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
  /*Contact phones: end*/

  /*Representative: start*/
  clearRepresentative = (index) => {
    this.representativeObject.splice(index, 1);
  }

  createSellerRepresentativeObject = () => {
    this.representativeObject.push({
      cpf: this.sellerSignupForm.get('representative.representative_cpf').value,
      treatment: this.sellerSignupForm.get('representative.representative_treatment').value,
      name: this.sellerSignupForm.get('representative.representative_name').value,
      position: this.sellerSignupForm.get('representative.representative_position').value,
      email: this.sellerSignupForm.get('representative.representative_email').value,
      phones: this.representativePhoneObject,
      birthday: this.sellerSignupForm.get('representative.representative_birthday').value,
      schooling: this.sellerSignupForm.get('representative.representative_schooling').value,
      postal_code: this.sellerSignupForm.get('representative.representative_postal_code').value,
      address: this.sellerSignupForm.get('representative.representative_address').value,
      city: this.sellerSignupForm.get('representative.representative_city').value,
      state: this.sellerSignupForm.get('representative.representative_state').value
    })

    this.sellerSignupForm.get('representative.representative_cpf').patchValue(null),
    this.sellerSignupForm.get('representative.representative_treatment').patchValue(null),
    this.sellerSignupForm.get('representative.representative_name').patchValue(null),
    this.sellerSignupForm.get('representative.representative_position').patchValue(null),
    this.sellerSignupForm.get('representative.representative_email').patchValue(null),
    this.sellerSignupForm.get('representative.representative_birthday').patchValue(null),
    this.sellerSignupForm.get('representative.representative_schooling').patchValue(null),
    this.sellerSignupForm.get('representative.representative_postal_code').patchValue(null),
    this.sellerSignupForm.get('representative.representative_address').patchValue(null),
    this.sellerSignupForm.get('representative.representative_city').patchValue(null),
    this.sellerSignupForm.get('representative.representative_state').patchValue(null)
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
  /*Representative: end*/

  /*Representative phones: start*/
  clearRepresentativePhone = (index) => {
    this.representativePhoneObject.splice(index, 1);
  }

  createSellerRepresentativePhoneObject = () => {
    this.representativePhoneObject.push({
      phone_type_id: this.sellerSignupForm.get('representative.representative_phone_type').value,
      country_code: "+55",
      ddd: this.sellerSignupForm.get('representative.representative_phone_ddd').value,
      number: this.sellerSignupForm.get('representative.representative_phone_number').value,
    });
    this.sellerSignupForm.get('representative.representative_phone_type').patchValue(null);
    this.sellerSignupForm.get('representative.representative_phone_ddd').patchValue(null);
    this.sellerSignupForm.get('representative.representative_phone_number').patchValue(null);
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
  /*Representative phones: end*/

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
  clearCompanySocialMedia = (index) => {
    this.companySocialMediaObject.splice(index, 1);
  }

  createBuyerCompanySocialMediaObject = () => {
    this.companySocialMediaObject.push({
      digital_data_type: this.buyerSignupForm.get('contact.digital_data_type').value,
      url: this.buyerSignupForm.get('contact.company_social_media_url').value
    })

    this.buyerSignupForm.get('contact.digital_data_type').patchValue(null);
    this.buyerSignupForm.get('contact.company_social_media_url').patchValue(null);
  }

  createSellerCompanySocialMediaObject = () => {
    this.companySocialMediaObject.push({
      digital_data_type: this.sellerSignupForm.get('contact.digital_data_type').value,
      url: this.sellerSignupForm.get('contact.company_social_media_url').value
    })

    this.sellerSignupForm.get('contact.digital_data_type').patchValue(null);
    this.sellerSignupForm.get('contact.company_social_media_url').patchValue(null);
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

  removeObjectFromObjectArrayByPropertyValue = (objectsArray: any, property: string, value: string) => {
    let newObject = objectsArray.filter(function(property) {
       property !== value;
    });

    return newObject;
  }

  republicaVirtualCepToSeller = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);
    });
  }

  republicaVirtualCepToSellerRepresentative = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.representativeAddressObject = JSON.parse(object._body);

      this.sellerSignupForm.get('representative.representative_address').patchValue(this.representativeAddressObject.logradouro);
      this.sellerSignupForm.get('representative.representative_city').patchValue(this.representativeAddressObject.cidade);
      this.sellerSignupForm.get('representative.representative_state').patchValue(this.representativeAddressObject.uf);
    });
  }

  republicaVirtualCepToBuyer = (event) => {
    let cep = event.srcElement.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);
    });
  }

  republicaVirtualCepToBuyerRepresentative = (event) => {
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

  receitaWsCnpjToSeller = (event) => {
    let cnpj = event.srcElement.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaWsCnpjSearch(cnpj)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.companyObject = JSON.parse(object._body);

      this.sellerSignupForm.get('company.business_name').patchValue(this.companyObject.nome);
      this.sellerSignupForm.get('company.tranding_name').patchValue(this.companyObject.fantasia);
      this.sellerSignupForm.get('company.foundation_year').patchValue(this.companyObject.abertura);
      this.sellerSignupForm.get('contact.postal_code').patchValue(this.companyObject.cep);
      this.sellerSignupForm.get('contact.address').patchValue(this.companyObject.logradouro);
      this.sellerSignupForm.get('contact.number').patchValue(this.companyObject.numero);
      this.sellerSignupForm.get('contact.district').patchValue(this.companyObject.bairro);
      this.sellerSignupForm.get('contact.city').patchValue(this.companyObject.municipio);
      this.sellerSignupForm.get('contact.state').patchValue(this.companyObject.uf);

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

        this.sellerSignupForm.get('company.company_size').patchValue(size);
      }
    });
  }

  receitaWsCnpjToBuyer = (event) => {
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

  onSellerSubmit = () => {
    let representativesObject = {
      representatives: this.representativeObject
    }

    let phonesObject = {
      phones: this.companyPhoneObject
    }

    this.createNewObjectFromArrayOfObjects([
      this.sellerSignupForm,
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
