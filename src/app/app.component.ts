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

  contactGroupColor = "red";
  countries: any = countries;
  disabled: boolean = true;
  sellerSignupForm: FormGroup;
  buyerSignupForm: FormGroup;
  states: any = brazilianStates;
  objectToAPI: any;
  errors: any = [];
  errorsRevenues: any = [];
  formPagination: any = {
    maxIndex: 4,
    index: 0
  };
  loading: boolean = false;

  otherLanguage: boolean = false;
  otherProduct: boolean = false;

  otherStateRevenue: boolean = false;
  otherCountryRevenue: boolean = false;

  /*activity products by subgroup trouble: start*/
  subgroupChanged: boolean = false;
  productObject: any;
  subgroupObject: any;
  /*activity products by subgroup trouble: end*/
  
  /*company: start*/
  participantObject: any;
  participantBusiness: number;
  companySize: string;
  /*company: end*/

  /*company address trouble: start*/
  addressObject: any;
  /*company address trouble: start*/
  
  /*company phone trouble: start*/
  participantPhoneObject: any = [];
  /*company phone trouble: end*/

  /*representative phone trouble: start*/
  representativePhoneObject: any = [];
  representativeAddressObject: any;
  /*company phone trouble: end*/

  /*representative revenues trouble: start*/
  revenuesObject: any = [];

  representativeOtherStateRevenuesChanged: any;
  
  representativeOtherCountryRevenuesChanged: any;
  /*representative revenues trouble: end*/

  /*representative social media trouble: start*/
  participantSocialMediaObject: any = [];
  /*company social media trouble: end*/
  
  /*representative: start*/
  representativeTreatment: string;
  represenativeName: string;
  represenativePosition: string;
  represenativeEmail: string;
  representativeObject: any = [];
  representativeSearchObject: any;
  /*representative: end*/
  
  groups: any = [];
  subgroups: any = [];
  products: any = [];

  mask: any = {
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/,'-', /\d/,/\d/],
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/, /\d/],
    date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    zip: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    ddd: [/\d/,/\d/],
    phone: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
    cellphone: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
    uf: [/[A-Za-z]/,/[A-Za-z]/,]
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
      'participant': new FormGroup({
        'profile': new FormControl('seller'),
        'cnpj_number': new FormControl(null, Validators.required),
        'business_name': new FormControl(null, Validators.required),
        'tranding_name': new FormControl(null, Validators.required),
        'foundation_year': new FormControl(null, Validators.required),
        'employees_quantity': new FormControl(null, Validators.required),
        'legal_person': new FormControl(null, Validators.required),
        'company_size': new FormControl(null, Validators.required)
      }),
      'contact': new FormGroup({
        'postal_code': new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required),
        'number': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required),
        'district': new FormControl(null, Validators.required),
        'company_email': new FormControl(null, [Validators.required, Validators.email]),
        'company_site': new FormControl(null),
        'digital_data_type': new FormControl(null),
        'company_social_media_url': new FormControl(null),
        'company_phone_type': new FormControl(null), //Require participantPhoneObject
        'company_phone_ddd': new FormControl(null),
        'company_phone_number': new FormControl(null),        
      }),      
      'representative': new FormGroup({
        'representative_treatment': new FormControl(null),//required
        'representative_cpf': new FormControl(null),//required
        'representative_name': new FormControl(null),//required
        'representative_position': new FormControl(null),
        'representative_birthday': new FormControl(null),
        'representative_schooling': new FormControl(null),
        'representative_email': new FormControl(null), //required, email
        'representative_postal_code': new FormControl(null),//required
        'representative_address': new FormControl(null),//required
        'representative_city': new FormControl(null),//required
        'representative_state': new FormControl(null),//required
        'representative_phone_type': new FormControl(null), //Require representativePhoneObject
        'representative_phone_ddd': new FormControl(null),//required
        'representative_phone_number': new FormControl(null),//required        
      }),
      'interest': new FormGroup({
        'company_interests': new FormControl(null),
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
        'group_id': new FormControl(null, Validators.required),
        'subgroup_id': new FormControl(null, Validators.required),
        'product_id': new FormControl(null, Validators.required),
        'other_product': new FormControl(null),
      })
    })

    this.buyerSignupForm = new FormGroup({
      'participant': new FormGroup({
        'profile': new FormControl('buyer'),
        'cnpj_number': new FormControl(null, Validators.required),
        'business_name': new FormControl(null, Validators.required),
        'tranding_name': new FormControl(null, Validators.required),
        'foundation_year': new FormControl(null, Validators.required),
        'employees_quantity': new FormControl(null, Validators.required),
        'legal_person': new FormControl(null, Validators.required),
        'language': new FormControl(null, Validators.required),
        'other_language': new FormControl(null),
      }),
      'contact': new FormGroup({
        'country': new FormControl(null, Validators.required),
        'postal_code': new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required),
        'number': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required),
        'district': new FormControl(null, Validators.required),
        'company_email': new FormControl(null, [Validators.required, Validators.email]),
        'company_site': new FormControl(null),
        'digital_data_type': new FormControl(null),
        'company_social_media_url': new FormControl(null),
        'company_phone_type': new FormControl(null), //Require participantPhoneObject
        'company_phone_ddd': new FormControl(null),
        'company_phone_number': new FormControl(null),        
      }),      
      'representative': new FormGroup({
        'representative_treatment': new FormControl(null), //required
        'representative_cpf': new FormControl(null), //required
        'representative_name': new FormControl(null), //required
        'representative_position': new FormControl(null),
        'representative_email': new FormControl(null), //required, email
        'representative_phone_type': new FormControl(null), //Require representativePhoneObject
        'representative_phone_ddd': new FormControl(null), //required
        'representative_phone_number': new FormControl(null), //required
      }),
      'interest': new FormGroup({
        'company_interests': new FormControl(null),
        'partner_profile': new FormControl(null),
        'revenues_country': new FormControl(null),
        'local_revenues': new FormControl(null),
        'other_state': new FormControl(null),
        'other_state_revenues': new FormControl(null),
        'other_country': new FormControl(null),
        'other_country_revenues': new FormControl(null),
      }),
      'activity': new FormGroup({
        'subgroup_id': new FormControl(null, Validators.required),
        'product_id': new FormControl(null, Validators.required),
        'other_product': new FormControl(null),
      })
    })
    
    this.filteredCountries =  this.countries;

    console.log(this.sellerSignupForm.get('interest'))
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
    let r = val.target.value;
    
    if(val != null) {
      this.filteredCountries = this.countries.filter(s => s.country_name_pt.toLowerCase().indexOf(r.toLowerCase()) === 0)
    } else {
      this.filteredCountries = this.countries;
    }
    
    return this.filteredCountries;
  }

  onChangeparticipantBusiness = (event) => {
    if(event) {
      this.participantBusiness = event.value;
    } else {
      this.participantBusiness = undefined;
    }
    this.buyerSignupForm.reset();
    this.sellerSignupForm.reset();

    this.subgroupChanged = false;
    this.productObject = undefined;
    this.subgroupObject = undefined;

    this.participantObject = undefined;
    this.addressObject = undefined;
    this.participantPhoneObject = [];
    this.representativePhoneObject = [];
    this.revenuesObject = [];
    this.participantSocialMediaObject = [];
    this.representativeObject = [];
    this.representativeSearchObject = [];
    this.revenuesObject = [];
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
    this.participantPhoneObject.splice(index, 1);
  }

  createSellerContactPhoneObject = () => {
    this.participantPhoneObject.push({
      phone_type_id: this.sellerSignupForm.get('contact.company_phone_type').value,
      country_code: "+55",
      ddd: this.sellerSignupForm.get('contact.company_phone_ddd').value,
      number: this.sellerSignupForm.get('contact.company_phone_number').value
    })

    this.sellerSignupForm.get('contact.company_phone_type').patchValue(null);
    this.sellerSignupForm.get('contact.company_phone_ddd').patchValue(null);
    this.sellerSignupForm.get('contact.company_phone_number').patchValue(null);

    console.log(this.participantPhoneObject)
  }  

  createBuyerContactPhoneObject = () => {
    this.participantPhoneObject.push({
      phone_type_id: this.buyerSignupForm.get('contact.company_phone_type').value,
      country_code: "+55",
      ddd: this.buyerSignupForm.get('contact.company_phone_ddd').value,
      number: this.buyerSignupForm.get('contact.company_phone_number').value
    })

    this.buyerSignupForm.get('contact.company_phone_type').patchValue(null);
    this.buyerSignupForm.get('contact.company_phone_ddd').patchValue(null);
    this.buyerSignupForm.get('contact.company_phone_number').patchValue(null);    
  }

  validateSellerCompanyPhoneType() {
    if(this.participantPhoneObject.length < 1) {
      if(!this.sellerSignupForm.get('contact.company_phone_type').value) {
        this.sellerSignupForm.get('contact.company_phone_type').setErrors({'requiredCompanyPhoneType': true});
      }
    }
  }

  validateSellerCompanyPhoneDDD() {
    if(this.participantPhoneObject.length < 1) {
      if(!this.sellerSignupForm.get('contact.company_phone_ddd').value) {
        this.sellerSignupForm.get('contact.company_phone_ddd').setErrors({'requiredCompanyPhoneDDD': true});
      }
    }
  }

  validateSellerCompanyPhoneNumber() {
    if(this.participantPhoneObject.length < 1) {
      if(!this.sellerSignupForm.get('contact.company_phone_number').value) {
        this.sellerSignupForm.get('contact.company_phone_number').setErrors({'requiredCompanyPhoneNumber': true});
      }
    }
  }

  validateBuyerCompanyPhoneType() {
    if(this.participantPhoneObject.length < 1) {
      if(!this.buyerSignupForm.get('contact.company_phone_type').value) {
        this.buyerSignupForm.get('contact.company_phone_type').setErrors({'requiredCompanyPhoneType': true});
      }
    }
  }

  validateBuyerCompanyPhoneDDD() {
    if(this.participantPhoneObject.length < 1) {
      if(!this.buyerSignupForm.get('contact.company_phone_ddd').value) {
        this.buyerSignupForm.get('contact.company_phone_ddd').setErrors({'requiredCompanyPhoneDDD': true});
      }
    }
  }

  validateBuyerCompanyPhoneNumber() {
    if(this.participantPhoneObject.length < 1) {
      if(!this.buyerSignupForm.get('contact.company_phone_number').value) {
        this.buyerSignupForm.get('contact.company_phone_number').setErrors({'requiredCompanyPhoneNumber': true});
      }
    }
  }
  /*Contact phones: end*/

  /*Representative: start*/
  validateSellerRepresentativeTreatment() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_treatment').value) {
        this.sellerSignupForm.get('representative.representative_treatment').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativeCpf() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_cpf').value) {
        this.sellerSignupForm.get('representative.representative_cpf').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativeName() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_name').value) {
        this.sellerSignupForm.get('representative.representative_name').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativeEmail() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_email').value) {
        this.sellerSignupForm.get('representative.representative_email').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativePostalCode() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_postal_code').value) {
        this.sellerSignupForm.get('representative.representative_postal_code').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativeAddress() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_address').value) {
        this.sellerSignupForm.get('representative.representative_address').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativeCity() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_city').value) {
        this.sellerSignupForm.get('representative.representative_city').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativeState() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_state').value) {
        this.sellerSignupForm.get('representative.representative_state').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativePhoneType() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_phone_type').value) {
        this.sellerSignupForm.get('representative.representative_phone_type').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativePhoneDdd() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_phone_ddd').value) {
        this.sellerSignupForm.get('representative.representative_phone_ddd').setErrors({'required': true});
      }
    }
  }

  validateSellerRepresentativePhoneNumber() {
    if(this.representativeObject.length < 1) {
      if(!this.sellerSignupForm.get('representative.representative_phone_number').value) {
        this.sellerSignupForm.get('representative.representative_phone_number').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativeTreatment() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_treatment').value) {
        this.buyerSignupForm.get('representative.representative_treatment').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativeCpf() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_cpf').value) {
        this.buyerSignupForm.get('representative.representative_cpf').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativeName() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_name').value) {
        this.buyerSignupForm.get('representative.representative_name').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativeEmail() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_email').value) {
        this.buyerSignupForm.get('representative.representative_email').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativePhoneType() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_phone_type').value) {
        this.buyerSignupForm.get('representative.representative_phone_type').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativePhoneDdd() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_phone_ddd').value) {
        this.buyerSignupForm.get('representative.representative_phone_ddd').setErrors({'required': true});
      }
    }
  }

  validateBuyerRepresentativePhoneNumber() {
    if(this.representativeObject.length < 1) {
      if(!this.buyerSignupForm.get('representative.representative_phone_number').value) {
        this.buyerSignupForm.get('representative.representative_phone_number').setErrors({'required': true});
      }
    }
  }

  clearRepresentative = (index) => {
    this.representativeObject.splice(index, 1);
  }

  createSellerRepresentativeObject = () => {
    this.disabled = false;

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

    this.representativePhoneObject = [];
  }

  createBuyerRepresentativeObject = () => {
    this.disabled = false;

    this.representativeObject.push({
      cpf: this.buyerSignupForm.get('representative.representative_cpf').value,
      treatment: this.buyerSignupForm.get('representative.representative_treatment').value,
      name: this.buyerSignupForm.get('representative.representative_name').value,
      position: this.buyerSignupForm.get('representative.representative_position').value,
      email: this.buyerSignupForm.get('representative.representative_email').value,
      phones: this.representativePhoneObject
    })

    this.buyerSignupForm.get('representative.representative_cpf').patchValue(null),
    this.buyerSignupForm.get('representative.representative_treatment').patchValue(null),
    this.buyerSignupForm.get('representative.representative_name').patchValue(null),
    this.buyerSignupForm.get('representative.representative_position').patchValue(null),
    this.buyerSignupForm.get('representative.representative_email').patchValue(null)

    this.representativePhoneObject = [];
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
  createSellerLocalRevenuesObject = () => {
    for(let lim = this.revenuesObject.length, i = 0; i < lim; i++) {
      if(this.revenuesObject[i]) {
        if(this.revenuesObject[i].place_type == 'local') {
          this.revenuesObject.splice(i, 1);
        }
      }
    }

    if(this.sellerSignupForm.get('contact.city').value) {
      this.revenuesObject.push({
        place_type: 'local',
        place: this.sellerSignupForm.get('contact.city').value,
        revenues: this.sellerSignupForm.get('interest.local_revenues').value
      })
    } else {
      this.revenuesObject.push({
        place_type: 'local',
        place: 'Local',
        revenues: this.sellerSignupForm.get('interest.local_revenues').value
      })
    }
    console.log(this.revenuesObject);
    this.sumRevenues();

    this.representativeOtherStateRevenuesChanged = undefined;
  }

  createSellerOtherStateRevenuesObject = () => {
    this.revenuesObject.push({
      place_type: 'brazilian_state',
      place: this.sellerSignupForm.get('interest.other_state').value,
      revenues: this.sellerSignupForm.get('interest.other_state_revenues').value
    })

    this.sumRevenues();

    this.sellerSignupForm.get('interest.other_state').patchValue(null);
    this.sellerSignupForm.get('interest.other_state_revenues').patchValue(null);

    this.representativeOtherStateRevenuesChanged = undefined;
  }

  createSellerOtherCountryRevenuesObject = () => {
    this.revenuesObject.push({
      place_type: 'country',
      place: this.sellerSignupForm.get('interest.other_country').value,
      revenues: this.sellerSignupForm.get('interest.other_country_revenues').value
    })

    this.sumRevenues();

    this.sellerSignupForm.get('interest.other_country').patchValue(null);
    this.sellerSignupForm.get('interest.other_country_revenues').patchValue(null);

    this.representativeOtherCountryRevenuesChanged = undefined;
  }

  createBuyerOtherStateRevenuesObject = () => {
    this.revenuesObject.push({
      place_type: 'brazilian_state',
      place: this.buyerSignupForm.get('interest.other_state').value,
      revenues: this.buyerSignupForm.get('interest.other_state_revenues').value
    })

    this.sumRevenues();

    this.buyerSignupForm.get('interest.other_state').patchValue(null);
    this.buyerSignupForm.get('interest.other_state_revenues').patchValue(null);

    this.representativeOtherStateRevenuesChanged = undefined;
  }

  createBuyerOtherCountryRevenuesObject = () => {
    this.revenuesObject.push({
      place_type: 'country',
      place: this.buyerSignupForm.get('interest.other_country').value,
      revenues: this.buyerSignupForm.get('interest.other_country_revenues').value
    })

    this.sumRevenues();

    this.buyerSignupForm.get('interest.other_country').patchValue(null);
    this.buyerSignupForm.get('interest.other_country_revenues').patchValue(null);

    this.representativeOtherCountryRevenuesChanged = undefined;
  }

  createBuyerLocalRevenuesObject = () => {
    for(let lim = this.revenuesObject.length, i = 0; i < lim; i++) {
      if(this.revenuesObject[i]) {
        if(this.revenuesObject[i].place_type == 'local') {
          this.revenuesObject.splice(i, 1);
        }
      }
    }

    if(this.buyerSignupForm.get('contact.city').value) {
      this.revenuesObject.push({
        place_type: 'local',
        place: this.buyerSignupForm.get('contact.city').value,
        revenues: this.buyerSignupForm.get('interest.local_revenues').value
      })
    } else {
      this.revenuesObject.push({
        place_type: 'local',
        place: 'Local',
        revenues: this.buyerSignupForm.get('interest.local_revenues').value
      })
    }

    this.sumRevenues();

    this.representativeOtherStateRevenuesChanged = undefined;
  }

  clearRevenues = (index) => {
    this.revenuesObject.splice(index, 1);
  }

  sumRevenues = () => {
    let sum = 0;
    for(let lim = this.revenuesObject.length, i =0; i < lim; i++) {
      sum += this.revenuesObject[i].revenues;
    }

    if(sum > 100) {
      this.errorsRevenues.push({
        code: "er-01",
        message: "A soma dos faturamentos está ultrapassando 100%. Favor rever valores."
      });

      this.revenuesObject.pop();
    } else {
      this.errorsRevenues = [];
    }
  }
  /*Representative revenues: end*/

  
  /*Representative social medias: start*/
  clearCompanySocialMedia = (index) => {
    this.participantSocialMediaObject.splice(index, 1);
  }

  createBuyerparticipantSocialMediaObject = () => {
    this.participantSocialMediaObject.push({
      digital_data_type: this.buyerSignupForm.get('contact.digital_data_type').value,
      url: this.buyerSignupForm.get('contact.company_social_media_url').value
    })

    this.buyerSignupForm.get('contact.digital_data_type').patchValue(null);
    this.buyerSignupForm.get('contact.company_social_media_url').patchValue(null);
  }

  createSellerparticipantSocialMediaObject = () => {
    this.participantSocialMediaObject.push({
      digital_data_type: this.sellerSignupForm.get('contact.digital_data_type').value,
      url: this.sellerSignupForm.get('contact.company_social_media_url').value
    })

    this.sellerSignupForm.get('contact.digital_data_type').patchValue(null);
    this.sellerSignupForm.get('contact.company_social_media_url').patchValue(null);
  }
  /*Representative social medias: end*/

  onChangeOthersLanguage(event) {
    this.otherLanguage = false;
    for(let lim = event.value.length, i = 0; i < lim; i++) {
      if(event.value[i] == "Outra(s)") {
        this.otherLanguage = true;
      }
    }
  }

  onChangeOthersProduct(event) {
    this.otherProduct = false;
    for(let lim = event.value.length, i = 0; i < lim; i++) {
      if(event.value[i] == "Outro(s)") {
        this.otherProduct = true;
      }
    }
  }

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

    let string = JSON.stringify(newObject),
    finalObject = JSON.parse(string),
    params = {
      route: 'registration',
      objectToCreate: finalObject
    };

    this.crud.create('laravel', params)

    this.participantBusiness = 3;

    setTimeout(() => {
      this.participantBusiness = undefined;
    }, 4000)
  }

  removeObjectFromObjectArrayByPropertyValue = (objectsArray: any, property: string, value: string) => {
    let newObject = objectsArray.filter(function(property) {
       property !== value;
    });

    return newObject;
  }

  republicaVirtualCepToSeller = (event) => {
    this.loading = true;

    let cep = event.target.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);

      this.sellerSignupForm.get('contact.address').patchValue(this.addressObject.logradouro);
      this.sellerSignupForm.get('contact.district').patchValue(this.addressObject.bairro);
      this.sellerSignupForm.get('contact.city').patchValue(this.addressObject.cidade);
      this.sellerSignupForm.get('contact.state').patchValue(this.addressObject.uf);

      this.loading = false;
    });
  }

  republicaVirtualCepToSellerRepresentative = () => {
    let that = this;
    if(that.sellerSignupForm.get('representative.representative_postal_code').value) {
      this.loading = true;
      
      let cep = this.sellerSignupForm.get('representative.representative_postal_code').value.replace(/[-./]/gi, '');
      this.outsidersService
      .republicaVirtualCepSearch(cep)
      .then(res => {
        let string = JSON.stringify(res),
        object = JSON.parse(string);
        
        this.representativeAddressObject = JSON.parse(object._body);
        
        this.sellerSignupForm.get('representative.representative_address').patchValue(this.representativeAddressObject.logradouro);
        this.sellerSignupForm.get('representative.representative_city').patchValue(this.representativeAddressObject.cidade);
        this.sellerSignupForm.get('representative.representative_state').patchValue(this.representativeAddressObject.uf);

        this.loading = false;
      });
    }
  }

  republicaVirtualCepToBuyer = (event) => {
    this.loading = true;

    let cep = event.target.value.replace(/[-./]/gi, '');
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.addressObject = JSON.parse(object._body);

      this.buyerSignupForm.get('contact.address').patchValue(this.addressObject.logradouro);
      this.buyerSignupForm.get('contact.district').patchValue(this.addressObject.bairro);
      this.buyerSignupForm.get('contact.city').patchValue(this.addressObject.cidade);
      this.buyerSignupForm.get('contact.state').patchValue(this.addressObject.uf);

      this.loading = false;
    });
  }

  republicaVirtualCepToBuyerRepresentative = (event) => {
    this.loading = true;
    
    let cep = event.target.value;
    this.outsidersService
    .republicaVirtualCepSearch(cep)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.representativeAddressObject = JSON.parse(object._body);

      this.buyerSignupForm.get('representative.representative_address').patchValue(this.representativeAddressObject.logradouro);
      this.buyerSignupForm.get('representative.representative_city').patchValue(this.representativeAddressObject.cidade);
      this.buyerSignupForm.get('representative.representative_state').patchValue(this.representativeAddressObject.uf);

      this.loading = false;
    });
  }

  receitaCpfToSeller = (event) => {
    this.loading = true;

    let cpf = event.target.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaCpfSearch(cpf)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.representativeSearchObject = JSON.parse(object._body);

      this.sellerSignupForm.get('representative.representative_name').patchValue(this.representativeSearchObject.nome);
      this.sellerSignupForm.get('representative.representative_birthday').patchValue(this.representativeSearchObject.dataNascimento);
      this.sellerSignupForm.get('representative.representative_postal_code').patchValue(this.representativeSearchObject.enderecoCep);

      if(this.representativeSearchObject.sexo == "M") {
        this.sellerSignupForm.get('representative.representative_treatment').patchValue('sr');
      }

      if(this.representativeSearchObject.sexo == "F") {
        this.sellerSignupForm.get('representative.representative_treatment').patchValue('sra');
      }

      this.republicaVirtualCepToSellerRepresentative();

      this.loading = false;
    });
  }

  receitaCpfToBuyer = (event) => {
    this.loading = true;

    let cpf = event.target.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaCpfSearch(cpf)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.representativeSearchObject = JSON.parse(object._body);

      this.buyerSignupForm.get('representative.representative_name').patchValue(this.representativeSearchObject.nome);

      if(this.representativeSearchObject.sexo == "M") {
        this.buyerSignupForm.get('representative.representative_treatment').patchValue('sr');
      }

      if(this.representativeSearchObject.sexo == "F") {
        this.buyerSignupForm.get('representative.representative_treatment').patchValue('sra');
      }

      this.loading = false;
    });
  }

  receitaWsCnpjToSeller = (event) => {
    this.loading = true;

    let cnpj = event.target.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaWsCnpjSearch(cnpj)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.participantObject = JSON.parse(object._body);

      this.sellerSignupForm.get('participant.business_name').patchValue(this.participantObject.nome);
      this.sellerSignupForm.get('participant.tranding_name').patchValue(this.participantObject.fantasia);
      this.sellerSignupForm.get('participant.foundation_year').patchValue(this.participantObject.abertura);
      this.sellerSignupForm.get('contact.postal_code').patchValue(this.participantObject.cep);
      this.sellerSignupForm.get('contact.address').patchValue(this.participantObject.logradouro);
      this.sellerSignupForm.get('contact.number').patchValue(this.participantObject.numero);
      this.sellerSignupForm.get('contact.district').patchValue(this.participantObject.bairro);
      this.sellerSignupForm.get('contact.city').patchValue(this.participantObject.municipio);
      this.sellerSignupForm.get('contact.state').patchValue(this.participantObject.uf);

      if(this.participantObject.capital_social) {
        let number = Number(this.participantObject.capital_social);
        let size;
        if(number < 60000) {
          size = "mei";
        } else if(number < 360000) {
          size = "micro";
        } else {
          size = "pequena";
        }

        this.sellerSignupForm.get('participant.company_size').patchValue(size);
      }

      this.loading = false;
    });
    
    setTimeout(() => {
		this.loading = false;
    }, 5000);
  }

  receitaWsCnpjToBuyer = (event) => {
    this.loading = true;

    let cnpj = event.target.value.replace(/[-./]/gi, '');
    
    this.outsidersService
    .receitaWsCnpjSearch(cnpj)
    .then(res => {
      let string = JSON.stringify(res),
      object = JSON.parse(string);
      
      this.participantObject = JSON.parse(object._body);

      this.buyerSignupForm.get('participant.business_name').patchValue(this.participantObject.nome);
      this.buyerSignupForm.get('participant.tranding_name').patchValue(this.participantObject.fantasia);
      this.buyerSignupForm.get('participant.foundation_year').patchValue(this.participantObject.abertura);
      this.buyerSignupForm.get('contact.postal_code').patchValue(this.participantObject.cep);
      this.buyerSignupForm.get('contact.address').patchValue(this.participantObject.logradouro);
      this.buyerSignupForm.get('contact.number').patchValue(this.participantObject.numero);
      this.buyerSignupForm.get('contact.district').patchValue(this.participantObject.bairro);
      this.buyerSignupForm.get('contact.city').patchValue(this.participantObject.municipio);
      this.buyerSignupForm.get('contact.state').patchValue(this.participantObject.uf);

      if(this.participantObject.capital_social) {
        let number = Number(this.participantObject.capital_social);
        let size;
        if(number < 60000) {
          size = "mei";
        } else if(number < 360000) {
          size = "micro";
        } else {
          size = "pequena";
        }
      }

      this.loading = false;
    });
    
    setTimeout(() => {
		this.loading = false;
    }, 5000);
  }
  /*Share it?: end*/
  onBuyerSubmit = () => {

    let representativesObject = {
      representatives: this.representativeObject
    }

    let phonesObject = {
      phones: this.participantPhoneObject
    }

    let revenuesObject = {
      revenues: this.revenuesObject
    }

    let socialMediasObject = {
      socialMedias: this.participantSocialMediaObject
    }

    this.createNewObjectFromArrayOfObjects([
      this.buyerSignupForm.value,
      phonesObject,
      representativesObject,
      revenuesObject,
      socialMediasObject
    ]);
  }

  onSellerSubmit = () => {
    let representativesObject = {
      representatives: this.representativeObject
    }

    let phonesObject = {
      phones: this.participantPhoneObject
    }

    let revenuesObject = {
      revenues: this.revenuesObject
    }

    let socialMediasObject = {
      socialMedias: this.participantSocialMediaObject
    }

    this.createNewObjectFromArrayOfObjects([
      this.sellerSignupForm.value,
      phonesObject,
      representativesObject,
      revenuesObject,
      socialMediasObject
    ]);
  }

  changedTabIndex(event){
    this.formPagination.index = event.index;
  }
}
