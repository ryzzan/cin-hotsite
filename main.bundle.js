webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_crud_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_outsiders_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_validators_my_validators__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*Components*/

/*Modules*/

/*Services*/


/**
 * Validators
 */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared_services_crud_service__["a" /* CrudService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_validators_my_validators__["a" /* MyValidators */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_outsiders_service__["a" /* OutsidersService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return brazilianStates; });
var brazilianStates = [{
        value: 'ac',
        description: 'Acre'
    }, {
        value: 'al',
        description: 'Alagoas'
    }, {
        value: 'ap',
        description: 'Amapá'
    }, {
        value: 'am',
        description: 'Amazonas'
    }, {
        value: 'ba',
        description: 'Bahia'
    }, {
        value: 'ce',
        description: 'Ceará'
    }, {
        value: 'df',
        description: 'Distrito Federal'
    }, {
        value: 'es',
        description: 'Espírito Santo'
    }, {
        value: 'go',
        description: 'Goiás'
    }, {
        value: 'ma',
        description: 'Maranhão'
    }, {
        value: 'mt',
        description: 'Mato Grosso'
    }, {
        value: 'ms',
        description: 'Mato Grosso do Sul'
    }, {
        value: 'mg',
        description: 'Minas Gerais'
    }, {
        value: 'pa',
        description: 'Pará'
    }, {
        value: 'pb',
        description: 'Paraíba'
    }, {
        value: 'pr',
        description: 'Paraná'
    }, {
        value: 'pe',
        description: 'Pernambuco'
    }, {
        value: 'pi',
        description: 'Piauí'
    }, {
        value: 'rj',
        description: 'Rio de Janeiro'
    }, {
        value: 'rn',
        description: 'Rio Grande do Norte'
    }, {
        value: 'rs',
        description: 'Rio Grande do Sul'
    }, {
        value: 'ro',
        description: 'Rondônia'
    }, {
        value: 'rr',
        description: 'Roraima'
    }, {
        value: 'sc',
        description: 'Santa Catarina'
    }, {
        value: 'sp',
        description: 'São Paulo'
    }, {
        value: 'se',
        description: 'Sergipe'
    }, {
        value: 'to',
        description: 'Tocantins'
    }];

//# sourceMappingURL=brazilian-states.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countries; });
var countries = [{
        "continent_pt": "Ásia",
        "country_name_en": "Afghanistan",
        "country_name_pt": "Afeganistão",
        "gentile_pt": "afegãne",
        "initials": "AF"
    }, {
        "continent_pt": "África",
        "country_name_en": "South Africa",
        "country_name_pt": "África do Sul",
        "gentile_pt": "sul-africana",
        "initials": "ZA"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Albania",
        "country_name_pt": "Albânia",
        "gentile_pt": "albanesa",
        "initials": "AL"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Germany",
        "country_name_pt": "Alemanha",
        "gentile_pt": "alemã",
        "initials": "DE"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Andorra",
        "country_name_pt": "Andorra",
        "gentile_pt": "andorrana",
        "initials": "AD"
    }, {
        "continent_pt": "África",
        "country_name_en": "Angola",
        "country_name_pt": "Angola",
        "gentile_pt": "angolana",
        "initials": "AO"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Anguilla",
        "country_name_pt": "Anguilla",
        "gentile_pt": "anguillana",
        "initials": "AI"
    }, {
        "continent_pt": "Antártida",
        "country_name_en": "Antarctica",
        "country_name_pt": "Antártida",
        "gentile_pt": "de antártida",
        "initials": "AQ"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Antigua & Barbuda",
        "country_name_pt": "Antígua e Barbuda",
        "gentile_pt": "antiguana",
        "initials": "AG"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Saudi Arabia",
        "country_name_pt": "Arábia Saudita",
        "gentile_pt": "saudita",
        "initials": "SA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Algeria",
        "country_name_pt": "Argélia",
        "gentile_pt": "argelina",
        "initials": "DZ"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Argentina",
        "country_name_pt": "Argentina",
        "gentile_pt": "argentina",
        "initials": "AR"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Armenia",
        "country_name_pt": "Armênia",
        "gentile_pt": "armênia",
        "initials": "AM"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Aruba",
        "country_name_pt": "Aruba",
        "gentile_pt": "arubana",
        "initials": "AW"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Australia",
        "country_name_pt": "Austrália",
        "gentile_pt": "australiana",
        "initials": "AU"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Austria",
        "country_name_pt": "Áustria",
        "gentile_pt": "austríaca",
        "initials": "AT"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Azerbaijan",
        "country_name_pt": "Azerbaijão",
        "gentile_pt": "azerbaijano",
        "initials": "AZ"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Bahamas",
        "country_name_pt": "Bahamas",
        "gentile_pt": "bahamense",
        "initials": "BS"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Bahrain",
        "country_name_pt": "Bahrein",
        "gentile_pt": "barenita",
        "initials": "BH"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Bangladesh",
        "country_name_pt": "Bangladesh",
        "gentile_pt": "bengali",
        "initials": "BD"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Barbados",
        "country_name_pt": "Barbados",
        "gentile_pt": "barbadiana",
        "initials": "BB"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Belarus",
        "country_name_pt": "Belarus",
        "gentile_pt": "bielo-russa",
        "initials": "BY"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Belgium",
        "country_name_pt": "Bélgica",
        "gentile_pt": "belga",
        "initials": "BE"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Belize",
        "country_name_pt": "Belize",
        "gentile_pt": "belizenha",
        "initials": "BZ"
    }, {
        "continent_pt": "África",
        "country_name_en": "Benin",
        "country_name_pt": "Benin",
        "gentile_pt": "beninense",
        "initials": "BJ"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Bermuda",
        "country_name_pt": "Bermudas",
        "gentile_pt": "bermudiana",
        "initials": "BM"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Bolivia",
        "country_name_pt": "Bolívia",
        "gentile_pt": "boliviana",
        "initials": "BO"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Bosnia & Herzegovina",
        "country_name_pt": "Bósnia-Herzegóvina",
        "gentile_pt": "bósnia",
        "initials": "BA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Botswana",
        "country_name_pt": "Botsuana",
        "gentile_pt": "betchuana",
        "initials": "BW"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Brazil",
        "country_name_pt": "Brasil",
        "gentile_pt": "brasileira",
        "initials": "BR"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Brunei",
        "country_name_pt": "Brunei",
        "gentile_pt": "bruneiana",
        "initials": "BN"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Bulgaria",
        "country_name_pt": "Bulgária",
        "gentile_pt": "búlgara",
        "initials": "BG"
    }, {
        "continent_pt": "África",
        "country_name_en": "Burkina Faso",
        "country_name_pt": "Burkina Fasso",
        "gentile_pt": "burquinês",
        "initials": "BF"
    }, {
        "continent_pt": "África",
        "country_name_en": "Burundi",
        "country_name_pt": "Burundi",
        "gentile_pt": "burundinesa",
        "initials": "BI"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Bhutan",
        "country_name_pt": "Butão",
        "gentile_pt": "butanesa",
        "initials": "BT"
    }, {
        "continent_pt": "África",
        "country_name_en": "Cape Verde",
        "country_name_pt": "Cabo Verde",
        "gentile_pt": "cabo-verdiana",
        "initials": "CV"
    }, {
        "continent_pt": "África",
        "country_name_en": "Cameroon",
        "country_name_pt": "Camarões",
        "gentile_pt": "camaronesa",
        "initials": "CM"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Cambodia",
        "country_name_pt": "Camboja",
        "gentile_pt": "cambojana",
        "initials": "KH"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Canada",
        "country_name_pt": "Canadá",
        "gentile_pt": "canadense",
        "initials": "CA"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Canary Islands",
        "country_name_pt": "Canárias",
        "gentile_pt": "canário",
        "initials": "IC"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Kazakhstan",
        "country_name_pt": "Cazaquistão",
        "gentile_pt": "cazaque",
        "initials": "KZ"
    }, {
        "continent_pt": "África",
        "country_name_en": "Ceuta & Melilla",
        "country_name_pt": "Ceuta e Melilla",
        "gentile_pt": "de ceuta e melilla",
        "initials": "EA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Chad",
        "country_name_pt": "Chade",
        "gentile_pt": "chadiana",
        "initials": "TD"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Chile",
        "country_name_pt": "Chile",
        "gentile_pt": "chilena",
        "initials": "CL"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "China",
        "country_name_pt": "China",
        "gentile_pt": "chinesa",
        "initials": "CN"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Cyprus",
        "country_name_pt": "Chipre",
        "gentile_pt": "cipriota",
        "initials": "CY"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Singapore",
        "country_name_pt": "Cingapura",
        "gentile_pt": "cingapuriana",
        "initials": "SG"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Colombia",
        "country_name_pt": "Colômbia",
        "gentile_pt": "colombiana",
        "initials": "CO"
    }, {
        "continent_pt": "África",
        "country_name_en": "Comoros",
        "country_name_pt": "Comores",
        "gentile_pt": "comorense",
        "initials": "KM"
    }, {
        "continent_pt": "África",
        "country_name_en": "Congo (Republic)",
        "country_name_pt": "Congo",
        "gentile_pt": "congolesa",
        "initials": "CG"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "North Korea",
        "country_name_pt": "Coréia do Norte",
        "gentile_pt": "norte-coreano",
        "initials": "KP"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "South Korea",
        "country_name_pt": "Coréia do Sul",
        "gentile_pt": "norte-coreana",
        "initials": "KR"
    }, {
        "continent_pt": "África",
        "country_name_en": "Côte d¿Ivoire",
        "country_name_pt": "Costa do Marfim",
        "gentile_pt": "marfinense",
        "initials": "CI"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Costa Rica",
        "country_name_pt": "Costa Rica",
        "gentile_pt": "costarriquenha",
        "initials": "CR"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Croatia",
        "country_name_pt": "Croácia",
        "gentile_pt": "croata",
        "initials": "HR"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Cuba",
        "country_name_pt": "Cuba",
        "gentile_pt": "cubana",
        "initials": "CU"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Curaçao",
        "country_name_pt": "Curaçao",
        "gentile_pt": "curaçauense",
        "initials": "CW"
    }, {
        "continent_pt": "Incerto",
        "country_name_en": "Diego Garcia",
        "country_name_pt": "Diego Garcia",
        "gentile_pt": "chagositano",
        "initials": "DG"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Denmark",
        "country_name_pt": "Dinamarca",
        "gentile_pt": "dinamarquesa",
        "initials": "DK"
    }, {
        "continent_pt": "África",
        "country_name_en": "Djibouti",
        "country_name_pt": "Djibuti",
        "gentile_pt": "djibutiana",
        "initials": "DJ"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Dominica",
        "country_name_pt": "Dominica",
        "gentile_pt": "dominiquense",
        "initials": "DM"
    }, {
        "continent_pt": "África",
        "country_name_en": "Egypt",
        "country_name_pt": "Egito",
        "gentile_pt": "egípcia",
        "initials": "EG"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "El Salvador",
        "country_name_pt": "El Salvador",
        "gentile_pt": "salvadorenha",
        "initials": "SV"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "United Arab Emirates",
        "country_name_pt": "Emirados Árabes Unidos",
        "gentile_pt": "árabe",
        "initials": "AE"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Ecuador",
        "country_name_pt": "Equador",
        "gentile_pt": "equatoriana",
        "initials": "EC"
    }, {
        "continent_pt": "África",
        "country_name_en": "Eritrea",
        "country_name_pt": "Eritréia",
        "gentile_pt": "eritreia",
        "initials": "ER"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Slovakia",
        "country_name_pt": "Eslováquia",
        "gentile_pt": "eslovaco",
        "initials": "SK"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Slovenia",
        "country_name_pt": "Eslovênia",
        "gentile_pt": "esloveno",
        "initials": "SI"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Spain",
        "country_name_pt": "Espanha",
        "gentile_pt": "espanhola",
        "initials": "ES"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "United States",
        "country_name_pt": "Estados Unidos",
        "gentile_pt": "norte-americana",
        "initials": "US"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Estonia",
        "country_name_pt": "Estônia",
        "gentile_pt": "estoniana",
        "initials": "EE"
    }, {
        "continent_pt": "África",
        "country_name_en": "Ethiopia",
        "country_name_pt": "Etiópia",
        "gentile_pt": "etíope",
        "initials": "ET"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Fiji",
        "country_name_pt": "Fiji",
        "gentile_pt": "fijiana",
        "initials": "FJ"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Philippines",
        "country_name_pt": "Filipinas",
        "gentile_pt": "filipina",
        "initials": "PH"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Finland",
        "country_name_pt": "Finlândia",
        "gentile_pt": "finlandesa",
        "initials": "FI"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "France",
        "country_name_pt": "França",
        "gentile_pt": "francesa",
        "initials": "FR"
    }, {
        "continent_pt": "África",
        "country_name_en": "Gabon",
        "country_name_pt": "Gabão",
        "gentile_pt": "gabonesa",
        "initials": "GA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Gambia",
        "country_name_pt": "Gâmbia",
        "gentile_pt": "gambiana",
        "initials": "GM"
    }, {
        "continent_pt": "África",
        "country_name_en": "Ghana",
        "country_name_pt": "Gana",
        "gentile_pt": "ganense",
        "initials": "GH"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Georgia",
        "country_name_pt": "Geórgia",
        "gentile_pt": "georgiana",
        "initials": "GE"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Gibraltar",
        "country_name_pt": "Gibraltar",
        "gentile_pt": "gibraltariana",
        "initials": "GI"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "United Kingdom",
        "country_name_pt": "Grã-Bretanha (Reino Unido, UK)",
        "gentile_pt": "inglesa",
        "initials": "GB"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Grenada",
        "country_name_pt": "Granada",
        "gentile_pt": "granadina",
        "initials": "GD"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Greece",
        "country_name_pt": "Grécia",
        "gentile_pt": "grega",
        "initials": "GR"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Greenland",
        "country_name_pt": "Groelândia",
        "gentile_pt": "groenlandesa",
        "initials": "GL"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Guadeloupe",
        "country_name_pt": "Guadalupe",
        "gentile_pt": "guadalupense",
        "initials": "GP"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Guam",
        "country_name_pt": "Guam (Território dos Estados Unidos)",
        "gentile_pt": "guamês",
        "initials": "GU"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Guatemala",
        "country_name_pt": "Guatemala",
        "gentile_pt": "guatemalteca",
        "initials": "GT"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Guernsey",
        "country_name_pt": "Guernsey",
        "gentile_pt": "guernesiano",
        "initials": "GG"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Guyana",
        "country_name_pt": "Guiana",
        "gentile_pt": "guianense",
        "initials": "GY"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "French Guiana",
        "country_name_pt": "Guiana Francesa",
        "gentile_pt": "franco-guianense",
        "initials": "GF"
    }, {
        "continent_pt": "África",
        "country_name_en": "Guinea",
        "country_name_pt": "Guiné",
        "gentile_pt": "guinéu-equatoriano ou equatoguineana",
        "initials": "GN"
    }, {
        "continent_pt": "África",
        "country_name_en": "Equatorial Guinea",
        "country_name_pt": "Guiné Equatorial",
        "gentile_pt": "guinéu-equatoriano",
        "initials": "GQ"
    }, {
        "continent_pt": "África",
        "country_name_en": "Guinea-Bissau",
        "country_name_pt": "Guiné-Bissau",
        "gentile_pt": "guineense",
        "initials": "GW"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Haiti",
        "country_name_pt": "Haiti",
        "gentile_pt": "haitiana",
        "initials": "HT"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Netherlands",
        "country_name_pt": "Holanda",
        "gentile_pt": "holandês",
        "initials": "NL"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Honduras",
        "country_name_pt": "Honduras",
        "gentile_pt": "hondurenha",
        "initials": "HN"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Hong Kong",
        "country_name_pt": "Hong Kong",
        "gentile_pt": "hong-konguiana ou chinesa",
        "initials": "HK"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Hungary",
        "country_name_pt": "Hungria",
        "gentile_pt": "húngara",
        "initials": "HU"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Yemen",
        "country_name_pt": "Iêmen",
        "gentile_pt": "iemenita",
        "initials": "YE"
    }, {
        "continent_pt": "Antártida",
        "country_name_en": "Bouvet Island",
        "country_name_pt": "Ilha Bouvet",
        "gentile_pt": "da ilha bouvet",
        "initials": "BV"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Ascension Island",
        "country_name_pt": "Ilha de Ascensão",
        "gentile_pt": "da ilha de ascensão",
        "initials": "AC"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Clipperton Island",
        "country_name_pt": "Ilha de Clipperton",
        "gentile_pt": "da ilha de clipperton",
        "initials": "CP"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Isle of Man",
        "country_name_pt": "Ilha de Man",
        "gentile_pt": "manês",
        "initials": "IM"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Christmas Island",
        "country_name_pt": "Ilha Natal",
        "gentile_pt": "natalense",
        "initials": "CX"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Pitcairn Islands",
        "country_name_pt": "Ilha Pitcairn",
        "gentile_pt": "pitcairnense",
        "initials": "PN"
    }, {
        "continent_pt": "África",
        "country_name_en": "Réunion",
        "country_name_pt": "Ilha Reunião",
        "gentile_pt": "reunionense",
        "initials": "RE"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Åland Islands",
        "country_name_pt": "Ilhas Aland",
        "gentile_pt": "alandês",
        "initials": "AX"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Cayman Islands",
        "country_name_pt": "Ilhas Cayman",
        "gentile_pt": "caimanês",
        "initials": "KY"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Cocos (Keeling) Islands",
        "country_name_pt": "Ilhas Cocos",
        "gentile_pt": "coquense",
        "initials": "CC"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Cook Islands",
        "country_name_pt": "Ilhas Cook",
        "gentile_pt": "cookense",
        "initials": "CK"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Faroe Islands",
        "country_name_pt": "Ilhas Faroes",
        "gentile_pt": "faroense",
        "initials": "FO"
    }, {
        "continent_pt": "Incerto",
        "country_name_en": "South Georgia & South Sandwich Islands",
        "country_name_pt": "Ilhas Geórgia do Sul e Sandwich do Sul",
        "gentile_pt": "das ilhas geórgia do sul e sandwich do sul",
        "initials": "GS"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Heard & McDonald Islands",
        "country_name_pt": "Ilhas Heard e McDonald (Território da Austrália)",
        "gentile_pt": "das ilhas heard e mcdonald",
        "initials": "HM"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Falkland Islands (Islas Malvinas)",
        "country_name_pt": "Ilhas Malvinas",
        "gentile_pt": "malvinense",
        "initials": "FK"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Northern Mariana Islands",
        "country_name_pt": "Ilhas Marianas do Norte",
        "gentile_pt": "norte-marianense",
        "initials": "MP"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Marshall Islands",
        "country_name_pt": "Ilhas Marshall",
        "gentile_pt": "marshallino",
        "initials": "MH"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "U.S. Outlying Islands",
        "country_name_pt": "Ilhas Menores dos Estados Unidos",
        "gentile_pt": "das ilhas menores afastadas",
        "initials": "UM"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Norfolk Island",
        "country_name_pt": "Ilhas Norfolk",
        "gentile_pt": "norfolquino",
        "initials": "NF"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Solomon Islands",
        "country_name_pt": "Ilhas Salomão",
        "gentile_pt": "salomônico",
        "initials": "SB"
    }, {
        "continent_pt": "África",
        "country_name_en": "Seychelles",
        "country_name_pt": "Ilhas Seychelles",
        "gentile_pt": "seichelense",
        "initials": "SC"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Tokelau",
        "country_name_pt": "Ilhas Tokelau",
        "gentile_pt": "toquelauano",
        "initials": "TK"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Turks & Caicos Islands",
        "country_name_pt": "Ilhas Turks e Caicos",
        "gentile_pt": "turquês",
        "initials": "TC"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "U.S. Virgin Islands",
        "country_name_pt": "Ilhas Virgens (Estados Unidos)",
        "gentile_pt": "virginense",
        "initials": "VI"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "British Virgin Islands",
        "country_name_pt": "Ilhas Virgens (Inglaterra)",
        "gentile_pt": "virginense",
        "initials": "VG"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "India",
        "country_name_pt": "Índia",
        "gentile_pt": "indiano",
        "initials": "IN"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Indonesia",
        "country_name_pt": "Indonésia",
        "gentile_pt": "indonésia",
        "initials": "ID"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Iran",
        "country_name_pt": "Irã",
        "gentile_pt": "iraniano",
        "initials": "IR"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Iraq",
        "country_name_pt": "Iraque",
        "gentile_pt": "iraquiana",
        "initials": "IQ"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Ireland",
        "country_name_pt": "Irlanda",
        "gentile_pt": "irlandesa",
        "initials": "IE"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Iceland",
        "country_name_pt": "Islândia",
        "gentile_pt": "islandesa",
        "initials": "IS"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Israel",
        "country_name_pt": "Israel",
        "gentile_pt": "israelense",
        "initials": "IL"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Italy",
        "country_name_pt": "Itália",
        "gentile_pt": "italiana",
        "initials": "IT"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Jamaica",
        "country_name_pt": "Jamaica",
        "gentile_pt": "jamaicana",
        "initials": "JM"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Japan",
        "country_name_pt": "Japão",
        "gentile_pt": "japonesa",
        "initials": "JP"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Jersey",
        "country_name_pt": "Jersey",
        "gentile_pt": "canalina",
        "initials": "JE"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Jordan",
        "country_name_pt": "Jordânia",
        "gentile_pt": "jordaniana",
        "initials": "JO"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Kiribati",
        "country_name_pt": "Kiribati",
        "gentile_pt": "kiribatiana",
        "initials": "KI"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Kosovo",
        "country_name_pt": "Kosovo",
        "gentile_pt": "kosovar",
        "initials": "XK"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Kuwait",
        "country_name_pt": "Kuait",
        "gentile_pt": "kuwaitiano",
        "initials": "KW"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Laos",
        "country_name_pt": "Laos",
        "gentile_pt": "laosiana",
        "initials": "LA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Lesotho",
        "country_name_pt": "Lesoto",
        "gentile_pt": "lesota",
        "initials": "LS"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Latvia",
        "country_name_pt": "Letônia",
        "gentile_pt": "letão",
        "initials": "LV"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Lebanon",
        "country_name_pt": "Líbano",
        "gentile_pt": "libanesa",
        "initials": "LB"
    }, {
        "continent_pt": "África",
        "country_name_en": "Liberia",
        "country_name_pt": "Libéria",
        "gentile_pt": "liberiana",
        "initials": "LR"
    }, {
        "continent_pt": "África",
        "country_name_en": "Libya",
        "country_name_pt": "Líbia",
        "gentile_pt": "líbia",
        "initials": "LY"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Liechtenstein",
        "country_name_pt": "Liechtenstein",
        "gentile_pt": "liechtensteiniense",
        "initials": "LI"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Lithuania",
        "country_name_pt": "Lituânia",
        "gentile_pt": "lituana",
        "initials": "LT"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Luxembourg",
        "country_name_pt": "Luxemburgo",
        "gentile_pt": "luxemburguesa",
        "initials": "LU"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Macau",
        "country_name_pt": "Macau",
        "gentile_pt": "macauense",
        "initials": "MO"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Macedonia (FYROM)",
        "country_name_pt": "Macedônia (República Yugoslava)",
        "gentile_pt": "macedônio",
        "initials": "MK"
    }, {
        "continent_pt": "África",
        "country_name_en": "Madagascar",
        "country_name_pt": "Madagascar",
        "gentile_pt": "malgaxe",
        "initials": "MG"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Malaysia",
        "country_name_pt": "Malásia",
        "gentile_pt": "malaia",
        "initials": "MY"
    }, {
        "continent_pt": "África",
        "country_name_en": "Malawi",
        "country_name_pt": "Malaui",
        "gentile_pt": "malauiano",
        "initials": "MW"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Maldives",
        "country_name_pt": "Maldivas",
        "gentile_pt": "maldívia",
        "initials": "MV"
    }, {
        "continent_pt": "África",
        "country_name_en": "Mali",
        "country_name_pt": "Mali",
        "gentile_pt": "malinesa",
        "initials": "ML"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Malta",
        "country_name_pt": "Malta",
        "gentile_pt": "maltesa",
        "initials": "MT"
    }, {
        "continent_pt": "África",
        "country_name_en": "Morocco",
        "country_name_pt": "Marrocos",
        "gentile_pt": "marroquina",
        "initials": "MA"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Martinique",
        "country_name_pt": "Martinica",
        "gentile_pt": "martiniquense",
        "initials": "MQ"
    }, {
        "continent_pt": "África",
        "country_name_en": "Mauritius",
        "country_name_pt": "Maurício",
        "gentile_pt": "mauriciana",
        "initials": "MU"
    }, {
        "continent_pt": "África",
        "country_name_en": "Mauritania",
        "country_name_pt": "Mauritânia",
        "gentile_pt": "mauritana",
        "initials": "MR"
    }, {
        "continent_pt": "África",
        "country_name_en": "Mayotte",
        "country_name_pt": "Mayotte",
        "gentile_pt": "maiotense",
        "initials": "YT"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Mexico",
        "country_name_pt": "México",
        "gentile_pt": "mexicana",
        "initials": "MX"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Micronesia",
        "country_name_pt": "Micronésia",
        "gentile_pt": "micronésia",
        "initials": "FM"
    }, {
        "continent_pt": "África",
        "country_name_en": "Mozambique",
        "country_name_pt": "Moçambique",
        "gentile_pt": "moçambicana",
        "initials": "MZ"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Moldova",
        "country_name_pt": "Moldova",
        "gentile_pt": "moldavo",
        "initials": "MD"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Monaco",
        "country_name_pt": "Mônaco",
        "gentile_pt": "monegasca",
        "initials": "MC"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Mongolia",
        "country_name_pt": "Mongólia",
        "gentile_pt": "mongol",
        "initials": "MN"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Montenegro",
        "country_name_pt": "Montenegro",
        "gentile_pt": "montenegra",
        "initials": "ME"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Montserrat",
        "country_name_pt": "Montserrat",
        "gentile_pt": "montserratiano",
        "initials": "MS"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Myanmar (Burma)",
        "country_name_pt": "Myanma",
        "gentile_pt": "birmanês",
        "initials": "MM"
    }, {
        "continent_pt": "África",
        "country_name_en": "Namibia",
        "country_name_pt": "Namíbia",
        "gentile_pt": "namíbia",
        "initials": "NA"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Nauru",
        "country_name_pt": "Nauru",
        "gentile_pt": "nauruana",
        "initials": "NR"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Nepal",
        "country_name_pt": "Nepal",
        "gentile_pt": "nepalesa",
        "initials": "NP"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Nicaragua",
        "country_name_pt": "Nicarágua",
        "gentile_pt": "nicaraguense",
        "initials": "NI"
    }, {
        "continent_pt": "África",
        "country_name_en": "Niger",
        "country_name_pt": "Níger",
        "gentile_pt": "nigerina",
        "initials": "NE"
    }, {
        "continent_pt": "África",
        "country_name_en": "Nigeria",
        "country_name_pt": "Nigéria",
        "gentile_pt": "nigeriana",
        "initials": "NG"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Niue",
        "country_name_pt": "Niue",
        "gentile_pt": "niueana",
        "initials": "NU"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Norway",
        "country_name_pt": "Noruega",
        "gentile_pt": "norueguesa",
        "initials": "NO"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "New Caledonia",
        "country_name_pt": "Nova Caledônia",
        "gentile_pt": "caledônia",
        "initials": "NC"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "New Zealand",
        "country_name_pt": "Nova Zelândia",
        "gentile_pt": "neozelandesa",
        "initials": "NZ"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Oman",
        "country_name_pt": "Omã",
        "gentile_pt": "omani",
        "initials": "OM"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Caribbean Netherlands",
        "country_name_pt": "Países Baixos Caribenhos",
        "gentile_pt": "dos países baixos caribenhos",
        "initials": "BQ"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Palau",
        "country_name_pt": "Palau",
        "gentile_pt": "palauense",
        "initials": "PW"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Palestine",
        "country_name_pt": "Palestina",
        "gentile_pt": "palestino",
        "initials": "PS"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Panama",
        "country_name_pt": "Panamá",
        "gentile_pt": "zona do canal do panamá",
        "initials": "PA"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Papua New Guinea",
        "country_name_pt": "Papua-Nova Guiné",
        "gentile_pt": "pauásia",
        "initials": "PG"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Pakistan",
        "country_name_pt": "Paquistão",
        "gentile_pt": "paquistanesa",
        "initials": "PK"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Paraguay",
        "country_name_pt": "Paraguai",
        "gentile_pt": "paraguaia",
        "initials": "PY"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Peru",
        "country_name_pt": "Peru",
        "gentile_pt": "peruana",
        "initials": "PE"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "French Polynesia",
        "country_name_pt": "Polinésia Francesa",
        "gentile_pt": "franco-polinésia",
        "initials": "PF"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Poland",
        "country_name_pt": "Polônia",
        "gentile_pt": "polonesa",
        "initials": "PL"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Puerto Rico",
        "country_name_pt": "Porto Rico",
        "gentile_pt": "portorriquenha",
        "initials": "PR"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Portugal",
        "country_name_pt": "Portugal",
        "gentile_pt": "portuguesa",
        "initials": "PT"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Qatar",
        "country_name_pt": "Qatar",
        "gentile_pt": "catarense",
        "initials": "QA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Kenya",
        "country_name_pt": "Quênia",
        "gentile_pt": "queniano",
        "initials": "KE"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Kyrgyzstan",
        "country_name_pt": "Quirguistão",
        "gentile_pt": "quirguiz",
        "initials": "KG"
    }, {
        "continent_pt": "África",
        "country_name_en": "Central African Republic",
        "country_name_pt": "República Centro-Africana",
        "gentile_pt": "centro-africana",
        "initials": "CF"
    }, {
        "continent_pt": "África",
        "country_name_en": "Congo (DRC)",
        "country_name_pt": "República Democrática do Congo",
        "gentile_pt": "congolesa",
        "initials": "CD"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Dominican Republic",
        "country_name_pt": "República Dominicana",
        "gentile_pt": "dominicana",
        "initials": "DO"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Czech Republic",
        "country_name_pt": "República Tcheca",
        "gentile_pt": "tcheco",
        "initials": "CZ"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Romania",
        "country_name_pt": "Romênia",
        "gentile_pt": "romena",
        "initials": "RO"
    }, {
        "continent_pt": "África",
        "country_name_en": "Rwanda",
        "country_name_pt": "Ruanda",
        "gentile_pt": "ruandesa",
        "initials": "RW"
    }, {
        "continent_pt": "Eurásia",
        "country_name_en": "Russia",
        "country_name_pt": "Rússia (antiga URSS) - Federação Russa",
        "gentile_pt": "russa",
        "initials": "RU"
    }, {
        "continent_pt": "África",
        "country_name_en": "Western Sahara",
        "country_name_pt": "Saara Ocidental",
        "gentile_pt": "saariano",
        "initials": "EH"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "St. Pierre & Miquelon",
        "country_name_pt": "Saint-Pierre e Miquelon",
        "gentile_pt": "pedro-miquelonense",
        "initials": "PM"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "American Samoa",
        "country_name_pt": "Samoa Americana",
        "gentile_pt": "samoana",
        "initials": "AS"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Samoa",
        "country_name_pt": "Samoa Ocidental",
        "gentile_pt": "samoano",
        "initials": "WS"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "San Marino",
        "country_name_pt": "San Marino",
        "gentile_pt": "samarinês",
        "initials": "SM"
    }, {
        "continent_pt": "África",
        "country_name_en": "St. Helena",
        "country_name_pt": "Santa Helena",
        "gentile_pt": "helenense",
        "initials": "SH"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "St. Lucia",
        "country_name_pt": "Santa Lúcia",
        "gentile_pt": "santa-lucense",
        "initials": "LC"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "St. Barthélemy",
        "country_name_pt": "São Bartolomeu",
        "gentile_pt": "são-bartolomeense",
        "initials": "BL"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "St. Kitts & Nevis",
        "country_name_pt": "São Cristóvão e Névis",
        "gentile_pt": "são-cristovense",
        "initials": "KN"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "St. Martin",
        "country_name_pt": "São Martim",
        "gentile_pt": "são-martinhense",
        "initials": "MF"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "Sint Maarten",
        "country_name_pt": "São Martinho",
        "gentile_pt": "são-martinhense",
        "initials": "SX"
    }, {
        "continent_pt": "África",
        "country_name_en": "São Tomé & Príncipe",
        "country_name_pt": "São Tomé e Príncipe",
        "gentile_pt": "são-tomense",
        "initials": "ST"
    }, {
        "continent_pt": "América do Norte",
        "country_name_en": "St. Vincent & Grenadines",
        "country_name_pt": "São Vicente e Granadinas",
        "gentile_pt": "sao-vicentino",
        "initials": "VC"
    }, {
        "continent_pt": "África",
        "country_name_en": "Senegal",
        "country_name_pt": "Senegal",
        "gentile_pt": "senegalesa",
        "initials": "SN"
    }, {
        "continent_pt": "África",
        "country_name_en": "Sierra Leone",
        "country_name_pt": "Serra Leoa",
        "gentile_pt": "leonesa",
        "initials": "SL"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Serbia",
        "country_name_pt": "Sérvia",
        "gentile_pt": "sérvia",
        "initials": "RS"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Syria",
        "country_name_pt": "Síria",
        "gentile_pt": "síria",
        "initials": "SY"
    }, {
        "continent_pt": "África",
        "country_name_en": "Somalia",
        "country_name_pt": "Somália",
        "gentile_pt": "somali",
        "initials": "SO"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Sri Lanka",
        "country_name_pt": "Sri Lanka",
        "gentile_pt": "cingalesa",
        "initials": "LK"
    }, {
        "continent_pt": "África",
        "country_name_en": "Swaziland",
        "country_name_pt": "Suazilândia",
        "gentile_pt": "suazi",
        "initials": "SZ"
    }, {
        "continent_pt": "África",
        "country_name_en": "Sudan",
        "country_name_pt": "Sudão",
        "gentile_pt": "sudanesa",
        "initials": "SD"
    }, {
        "continent_pt": "África",
        "country_name_en": "South Sudan",
        "country_name_pt": "Sudão do Sul",
        "gentile_pt": "sul-sudanês",
        "initials": "SS"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Sweden",
        "country_name_pt": "Suécia",
        "gentile_pt": "sueca",
        "initials": "SE"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Switzerland",
        "country_name_pt": "Suíça",
        "gentile_pt": "suíça",
        "initials": "CH"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Suriname",
        "country_name_pt": "Suriname",
        "gentile_pt": "surinamesa",
        "initials": "SR"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Svalbard & Jan Mayen",
        "country_name_pt": "Svalbard",
        "gentile_pt": "svalbardense",
        "initials": "SJ"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Tajikistan",
        "country_name_pt": "Tadjiquistão",
        "gentile_pt": "tadjique",
        "initials": "TJ"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Thailand",
        "country_name_pt": "Tailândia",
        "gentile_pt": "tailandesa",
        "initials": "TH"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Taiwan",
        "country_name_pt": "Taiwan",
        "gentile_pt": "taiwanês",
        "initials": "TW"
    }, {
        "continent_pt": "África",
        "country_name_en": "Tanzania",
        "country_name_pt": "Tanzânia",
        "gentile_pt": "tanzaniana",
        "initials": "TZ"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "British Indian Ocean Territory",
        "country_name_pt": "Território Britânico do Oceano índico",
        "gentile_pt": "do território britânico do oceano índico",
        "initials": "IO"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "French Southern Territories",
        "country_name_pt": "Territórios do Sul da França",
        "gentile_pt": "do territórios do sul da frança",
        "initials": "TF"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Timor-Leste",
        "country_name_pt": "Timor-Leste",
        "gentile_pt": "timorense",
        "initials": "TL"
    }, {
        "continent_pt": "África",
        "country_name_en": "Togo",
        "country_name_pt": "Togo",
        "gentile_pt": "togolesa",
        "initials": "TG"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Tonga",
        "country_name_pt": "Tonga",
        "gentile_pt": "tonganesa",
        "initials": "TO"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Trinidad & Tobago",
        "country_name_pt": "Trinidad e Tobago",
        "gentile_pt": "trinitário-tobagense",
        "initials": "TT"
    }, {
        "continent_pt": "África",
        "country_name_en": "Tristan da Cunha",
        "country_name_pt": "Tristão da Cunha",
        "gentile_pt": "tristanita",
        "initials": "TA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Tunisia",
        "country_name_pt": "Tunísia",
        "gentile_pt": "tunisiana",
        "initials": "TN"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Turkmenistan",
        "country_name_pt": "Turcomenistão",
        "gentile_pt": "turcomana",
        "initials": "TM"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Turkey",
        "country_name_pt": "Turquia",
        "gentile_pt": "turca",
        "initials": "TR"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Tuvalu",
        "country_name_pt": "Tuvalu",
        "gentile_pt": "tuvaluana",
        "initials": "TV"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Ukraine",
        "country_name_pt": "Ucrânia",
        "gentile_pt": "ucraniana",
        "initials": "UA"
    }, {
        "continent_pt": "África",
        "country_name_en": "Uganda",
        "country_name_pt": "Uganda",
        "gentile_pt": "ugandense",
        "initials": "UG"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Uruguay",
        "country_name_pt": "Uruguai",
        "gentile_pt": "uruguaia",
        "initials": "UY"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Uzbekistan",
        "country_name_pt": "Uzbequistão",
        "gentile_pt": "uzbeque",
        "initials": "UZ"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Vanuatu",
        "country_name_pt": "Vanuatu",
        "gentile_pt": "vanuatuense",
        "initials": "VU"
    }, {
        "continent_pt": "Europa",
        "country_name_en": "Vatican City",
        "country_name_pt": "Vaticano",
        "gentile_pt": "vaticano",
        "initials": "VA"
    }, {
        "continent_pt": "América do Sul",
        "country_name_en": "Venezuela",
        "country_name_pt": "Venezuela",
        "gentile_pt": "venezuelana",
        "initials": "VE"
    }, {
        "continent_pt": "Ásia",
        "country_name_en": "Vietnam",
        "country_name_pt": "Vietnã",
        "gentile_pt": "vietnamita",
        "initials": "VN"
    }, {
        "continent_pt": "Oceania",
        "country_name_en": "Wallis & Futuna",
        "country_name_pt": "Wallis e Futuna",
        "gentile_pt": "wallis-futunense",
        "initials": "WF"
    }, {
        "continent_pt": "África",
        "country_name_en": "Zambia",
        "country_name_pt": "Zâmbia",
        "gentile_pt": "zambiana",
        "initials": "ZM"
    }, {
        "continent_pt": "África",
        "country_name_en": "Zimbabwe",
        "country_name_pt": "Zimbábue",
        "gentile_pt": "zimbabuana",
        "initials": "ZW"
    }];

//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selects; });
var selects = [{
        maturityArea: [{
                value: 1,
                description: 'Internacional'
            }, {
                value: 2,
                description: 'Nacional'
            }, {
                value: 3,
                description: 'Local'
            }],
        comercialArea: [{
                value: 'comercio',
                description: 'Comércio'
            }, {
                value: 'industria',
                description: 'Indústria'
            }, {
                value: 'servicos',
                description: 'Serviços'
            }],
        phoneType: [{
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
            }],
        productArea: [{
                value: 1,
                description: 'Produto 1',
                subgroups: [1, 3]
            }, {
                value: 2,
                description: 'Produto 2',
                subgroups: [1, 2]
            }, {
                value: 3,
                description: 'Produto 3',
                subgroups: [2]
            }, {
                value: 4,
                description: 'Produto 4',
                subgroups: [4]
            }],
        socialMedias: [{
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
            }],
        subgroupArea: [{
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
            }],
        treatment: [{
                value: 'sr',
                description: 'Senhor'
            }, {
                value: 'sra',
                description: 'Senhora'
            }],
        schooling: [{
                value: 'analfabeto',
                description: 'Não alfabetizado'
            }, {
                value: 'fundamental',
                description: 'Fundamental completo'
            }, {
                value: 'medio',
                description: 'Fundamental completo'
            }, {
                value: 'superior',
                description: 'Superior completo'
            }],
        languages: [{
                description: "Inglês"
            }, {
                description: "Francês"
            }, {
                description: "Espanhol"
            }, {
                description: "Português"
            }, {
                description: "Outra(s)"
            }]
    }];

//# sourceMappingURL=selects.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "/deep/ md-chip .mat-chip:not(.mat-basic-chip) {\n    padding: 1px 1px 0 1px;\n}\n\n/deep/ md-grid-tile.mat-grid-tile .mat-figure {\n    -webkit-box-pack: left;\n        -ms-flex-pack: left;\n            justify-content: left;\n    margin-bottom: 20px; \n    margin-top: 10px; \n}\n\n/deep/ md-grid-tile .mat-select-trigger {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    height: 24px;\n}\n\n/deep/ md-input-container.mat-input-container {\n    width: 95%;\n}\n\n.contact-phone-list {\n    vertical-align: middle;\n}\n\n#header {\n    position: absolute;\n    padding-top: 20px;\n    margin: 0 auto;\n    height: 150px;\n    width: 100%;\n    text-align: center;\n    background: transparent;\n}\n\n#header img {\n    width: 200px;\n    opacity: 1;\n}\n\n#content {\n    position: absolute;\n    top: 150px;\n    width: 94%;\n    background: #fff;\n    margin-left: 1%;\n    opacity: 0.7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div id=\"header\"> \n  <img src=\"assets/img/logo.svg\" alt=\"CIN - Centro Internacional de Negócios\">\n  <h2>FICHA DE INSCRIÇÃO</h2>\n</div>\n\n<div *ngIf=\"errors.length > 0\">\n  <md-error *ngFor=\"let error of errors\">\n    {{error.message}}\n  </md-error>\n</div>\n\n<md-card id=\"content\">\n  <!--Vendedor: início-->\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"signupForm\" *ngIf=\"companyBusiness == 1\">\n    <md-tab-group>\n      <md-tab label=\"Empresa\" formGroupName=\"company\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"8\">\n            <md-radio-group>\n              <md-radio-button (change)=\"onChangeCompanyBusiness($event)\" value=\"1\" checked=\"true\">Vendedor</md-radio-button>\n              <md-radio-button (change)=\"onChangeCompanyBusiness($event)\" value=\"2\">Comprador</md-radio-button>\n            </md-radio-group>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"cnpj_number\" type=\"text\"\n              placeholder=\"CNPJ\"\n              [textMask]=\"{mask: mask.cnpj}\"\n              (change)=\"receitaWsCnpj($event)\">\n              <md-error *ngIf=\"!signupForm.get('company.cnpj_number').valid && !signupForm.get('company.cnpj_number').touched\">Erro</md-error>\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"business_name\" type=\"text\"\n              placeholder=\"Razão Social\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"tranding_name\" type=\"text\"\n              placeholder=\"Nome Fantasia\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowheight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"foundation_year\" type=\"text\" \n              placeholder=\"Data de Abertura\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"employees_quantity\" type=\"text\" \n              placeholder=\"Nº de Funcionários\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <input mdInput formControlName=\"legal_person\" type=\"text\" \n              placeholder=\"Responsável Legal\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <div>Porte da Empresa*</div>\n\n          <md-grid-tile [colspan]=\"8\">\n            {{companySize}}\n            <md-radio-group formControlName=\"company_size\">\n              <md-radio-button value=\"mei\">MEI - Até R$ 60.000,00</md-radio-button>\n              <md-radio-button value=\"micro\">Microempresa - Até R$ 360.000,00</md-radio-button>\n              <md-radio-button value=\"pequena\">Pequena Empresa - R$ 360.000,00 a R$ 3.600.000,00</md-radio-button>\n            </md-radio-group>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-tab>\n\n      <md-tab label=\"Contatos da Empresa\" \n      \n      formGroupName=\"contact\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"postal_code\" type=\"text\" \n              (change)=\"republicaVirtualCep($event)\"\n              placeholder=\"CEP\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <input mdInput formControlName=\"address\" type=\"text\" \n              placeholder=\"Logradouro\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput formControlName=\"number\" type=\"text\" \n              placeholder=\"Número\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"district\" type=\"text\" \n              placeholder=\"Bairro\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"city\" type=\"text\" \n              placeholder=\"Município\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"state\" type=\"text\" \n              placeholder=\"UF\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Tipo de telefone\" formControlName=\"company_phone_type\">\n              <md-option *ngFor=\"let phone of phoneType\" [value]=\"phone.value\">{{phone.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" *ngIf=\"signupForm.get('contact.company_phone_type').value\">\n            <md-input-container style=\"width: 90px; margin-right: 5px;\">\n              <input mdInput type=\"text\" placeholder=\"DDD\" formControlName=\"company_phone_ddd\">\n            </md-input-container>\n            <md-input-container style=\"width: 110px;\">\n              <input mdInput type=\"text\" placeholder=\"Número\" formControlName=\"company_phone_number\"\n              maxlength=\"10\">\n            </md-input-container>            \n            <a md-mini-fab \n            *ngIf=\"signupForm.get('contact.company_phone_ddd').value && signupForm.get('contact.company_phone_number').value\"\n            (click)=\"createContactPhoneObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Mídia Social\" (change)=\"onChangeRepresentativeSocialMediaType($event)\">\n              <md-option *ngFor=\"let socialMedia of socialMedias\" [value]=\"socialMedia.value\">{{socialMedia.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" *ngIf=\"representativeSocialMediaTypeChanged\">\n            <md-input-container style=\"width: 300px;\">\n              <input mdInput type=\"text\" placeholder=\"URL da mídia social\" formControlName=\"company_social_media\">\n            </md-input-container>            \n            <a md-mini-fab \n            *ngIf=\"signupForm.get('contact.company_social_media').value\" \n            (click)=\"createRepresentativeSocialMediaObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"company_email\" type=\"text\" \n              placeholder=\"E-mail\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <input mdInput formControlName=\"company_site\" type=\"text\" \n              placeholder=\"Site\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <div *ngIf=\"companyPhoneObject.length > 0\"> \n          <md-chip-list>  \n            <span *ngFor=\"let companyPhone of companyPhoneObject; let i = index;\" class=\"contact-phone-list\">\n              <md-chip>\n                <span class=\"fs10 mr5\">({{companyPhone.ddd}}){{companyPhone.number}}</span>\n                <span (click)=\"clearRepresentativePhone(i)\"><md-icon class=\"fs10\">clear</md-icon></span>\n              </md-chip>              \n            </span>\n          </md-chip-list>\n        </div>\n      </md-tab>\n\n      <md-tab label=\"Representantes\" \n      formGroupName=\"representative\">\n        <md-grid-list cols=\"8\" rowHeight=\"30px\" *ngIf=\"representativeObject.length < 1\">\n          <md-grid-tile [colspan]=\"8\">\n            <md-error>Cadastrar ao menos um representante</md-error>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"1\">\n            <md-select placeholder=\"Título\" formControlName=\"representative_treatment\">\n              <md-option *ngFor=\"let treatment of treatments\" [value]=\"treatment.value\">{{treatment.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" \n              placeholder=\"CPF\" \n              formControlName=\"representative_cpf\"\n              [textMask]=\"{mask: mask.cpf}\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" placeholder=\"Nome\" \n              formControlName=\"representative_name\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" placeholder=\"Cargo\" \n              formControlName=\"representative_position\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput placeholder=\"Nascimento\" \n              [textMask]=\"{mask: mask.date}\"\n              formControlName=\"representative_birthday\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Escolaridade\" \n            formControlName=\"representative_schooling\">\n              <md-option *ngFor=\"let schoolingChoice of schooling\" [value]=\"schoolingChoice.value\">{{schoolingChoice.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n          \n          <!--Representative phone: start -->\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Tipo de telefone\" formControlName=\"representative_phone_type\">\n              <md-option *ngFor=\"let phone of phoneType\" [value]=\"phone.value\">{{phone.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" \n          *ngIf=\"signupForm.get('representative.representative_phone_type').value\">\n            <md-input-container style=\"width: 90px; margin-right: 5px;\">\n              <input mdInput type=\"text\" placeholder=\"DDD\" formControlName=\"representative_phone_ddd\">\n            </md-input-container>\n            <md-input-container style=\"width: 110px;\">\n              <input mdInput type=\"text\" placeholder=\"Número\" formControlName=\"representative_phone_number\"\n              maxlength=\"10\">\n            </md-input-container>            \n            <a md-mini-fab \n            *ngIf=\"signupForm.get('representative.representative_phone_ddd').value && signupForm.get('representative.representative_phone_number').value\" \n            (click)=\"createRepresentativePhoneObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n          <!--Representative phone: end -->\n          \n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" placeholder=\"E-mail\"\n              formControlName=\"representative_email\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_postal_code\"\n              (change)=\"republicaVirtualCepToRepresentative($event)\"\n              placeholder=\"CEP\"\n              [textMask]=\"{mask: mask.zip}\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_address\"\n              placeholder=\"Logradouro\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_city\"\n              placeholder=\"Cidade\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_state\"\n              placeholder=\"UF\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <div *ngIf=\"signupForm.get('representative.representative_treatment').value &&\n        signupForm.get('representative.representative_cpf').value && \n        signupForm.get('representative.representative_name').value && \n        signupForm.get('representative.representative_position').value && \n        signupForm.get('representative.representative_birthday').value &&\n        signupForm.get('representative.representative_schooling').value && \n        signupForm.get('representative.representative_email').value && \n        signupForm.get('representative.representative_postal_code').value && \n        signupForm.get('representative.representative_address').value &&\n        signupForm.get('representative.representative_city').value &&\n        signupForm.get('representative.representative_state').value\">\n          <a md-raised-button color=\"primary\" (click)=\"createRepresentativeObject()\">Adicionar Representantes</a>\n        </div>\n\n        <div *ngIf=\"representativePhoneObject.length > 0\"> \n          <md-chip-list>  \n            <span *ngFor=\"let representativePhone of representativePhoneObject; let i = index;\" class=\"contact-phone-list\">\n              <md-chip>\n                <span class=\"fs10 mr5\">({{representativePhone.ddd}}){{representativePhone.number}}</span>\n                <span (click)=\"clearRepresentativePhone(i)\"><md-icon class=\"fs10\">clear</md-icon></span>\n              </md-chip>              \n            </span>\n          </md-chip-list>\n        </div>\n\n        <div *ngIf=\"representativeObject.length > 0\"> \n          <md-chip-list>  \n            <span *ngFor=\"let representative of representativeObject; let i = index;\">\n              <md-chip>\n                <span class=\"fs10 mr5\">{{representative.cpf}}</span>\n                <span (click)=\"clearRepresentative(i)\"><md-icon class=\"fs10\">clear</md-icon></span>\n              </md-chip>              \n            </span>\n          </md-chip-list>\n        </div>\n      </md-tab>\n\n      <md-tab label=\"Atividade\" formGroupName=\"activity\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Ramos de Atividade\" formControlName=\"group_id\"\n            (change)=\"onChangeSubgroup($event)\"\n            multiple>\n              <md-option *ngFor=\"let group of groups\" [value]=\"group.id\">{{group.name}}</md-option>\n            </md-select>\n          </md-grid-tile>\n          \n          <md-grid-tile [colspan]=\"2\" *ngIf=\"subgroupChanged\">\n            <md-select placeholder=\"Setor\" formControlName=\"subgroup_id\"\n            (change)=\"filterProduct($event)\"\n            multiple>\n              <md-option *ngFor=\"let subgroup of subgroups\" [value]=\"subgroup.id\">{{subgroup.name}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" *ngIf=\"productObject\">\n            <md-select placeholder=\"Produtos\" formControlName=\"product_id\"\n            multiple>\n              <md-option *ngFor=\"let product of productObject\" [value]=\"product.id\">{{product.name}}</md-option>\n            </md-select>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-tab>\n\n      <md-tab label=\"Interesses\" formGroupName=\"interest\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Eventos nacionais/internacionais que sua empresa participou\" \n              formControlName=\"participation_events\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Interesses da empresa / Observações\"\n              formControlName=\"company_interests\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              placeholder=\"% de faturamento de vendas locais\"\n              (keyup)=\"onChangeRepresentativeLocalRevenues($event)\">\n            </md-input-container>\n\n            <a md-mini-fab *ngIf=\"createRepresentativeLocalRevenuesObjectButton\" (click)=\"createLocalRevenuesObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Outros estados\"\n            (change)=\"onChangeStatesBusiness($event)\">\n              <md-option *ngFor=\"let state of states\" [value]=\"state.description\">{{state.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\" [disabled]=\"statesBusinessChanged == undefined\"\n              placeholder=\"% de faturamento\"\n              (keyup)=\"onChangeRepresentativeOtherStateRevenues($event)\">\n            </md-input-container>\n\n            <a md-mini-fab *ngIf=\"createRepresentativeOtherStateRevenuesObjectButton\" (click)=\"createOtherStateRevenuesObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput placeholder=\"Outros países\" \n              [mdAutocomplete]=\"auto\" \n              formControlName=\"revenues_country\"\n              (keyup)=\"filterCountries($event)\">\n            </md-input-container>\n\n            <md-autocomplete #auto=\"mdAutocomplete\">\n              <md-option *ngFor=\"let country of filteredCountries\" [value]=\"country.country_name_pt\">\n                {{country.country_name_pt}}\n              </md-option>\n            </md-autocomplete>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\" [disabled]=\"countriesBusinessChanged == undefined\"\n              placeholder=\"% de faturamento\"\n              (keyup)=\"onChangeRepresentativeOtherCountryRevenues($event)\">\n            </md-input-container>\n\n            <a md-mini-fab *ngIf=\"createRepresentativeOtherCountryRevenuesObjectButton\" (click)=\"createOtherCountryRevenuesObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Capacidade de Venda (Exportação) / Mês (Unidades)\"\n              formControlName=\"sales_capacity\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" *ngIf=\"representativeRevenuesObject.length > 0\">\n          <div *ngFor=\"let revenue of representativeRevenuesObject\">\n            {{revenue.place}}\n          </div> \n         </md-grid-list>\n      </md-tab>\n    </md-tab-group>\n\n    <md-card-actions>\n      <button type=\"submit\" md-raised-button color=\"primary\" [disabled]=\"!signupForm.valid\">Cadastrar</button>\n    </md-card-actions>\n  </form>\n  <!--Vendedor: fim-->\n\n  <!--Comprador: início-->\n  <form (ngSubmit)=\"onBuyerSubmit()\" [formGroup]=\"buyerSignupForm\" *ngIf=\"companyBusiness == 2\">\n    <md-tab-group>\n      <md-tab label=\"Empresa\" formGroupName=\"company\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"8\">\n            <md-radio-group>\n              <md-radio-button (change)=\"onChangeCompanyBusiness($event)\" value=\"1\">Vendedor</md-radio-button>\n              <md-radio-button (change)=\"onChangeCompanyBusiness($event)\" value=\"2\" checked=\"true\">Comprador</md-radio-button>\n            </md-radio-group>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\" *ngIf=\"companyBusiness\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"cnpj_number\" type=\"text\"\n              placeholder=\"CNPJ\"\n              [textMask]=\"{mask: mask.cnpj}\"\n              (change)=\"receitaWsBuyerCnpj($event)\">\n              <md-error *ngIf=\"!buyerSignupForm.get('company.cnpj_number').valid && !buyerSignupForm.get('company.cnpj_number').touched\">Erro</md-error>\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"business_name\" type=\"text\"\n              placeholder=\"Razão Social\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"tranding_name\" type=\"text\"\n              placeholder=\"Nome Fantasia\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowheight=\"100px\" *ngIf=\"companyBusiness\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"foundation_year\" type=\"text\" \n              placeholder=\"Data de Abertura\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"employees_quantity\" type=\"text\" \n              placeholder=\"Nº de Funcionários\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <input mdInput formControlName=\"legal_person\" type=\"text\" \n              placeholder=\"Responsável Legal\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"4\">\n            <md-select placeholder=\"Idiomas nos quais deseja se comunicar\" formControlName=\"language\"\n            multiple>\n              <md-option *ngFor=\"let language of languages\" [value]=\"language.description\">{{language.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-tab>\n\n      <md-tab label=\"Contatos da Empresa\" \n      *ngIf=\"companyBusiness\" \n      formGroupName=\"contact\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput placeholder=\"País\" \n              [mdAutocomplete]=\"auto\" \n              formControlName=\"country\"\n              (keyup)=\"filterCountries($event)\">\n            </md-input-container>\n\n            <md-autocomplete #auto=\"mdAutocomplete\">\n              <md-option *ngFor=\"let country of filteredCountries\" [value]=\"country.country_name_pt\">\n                {{country.country_name_pt}}\n              </md-option>\n            </md-autocomplete>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"postal_code\" type=\"text\" \n              (change)=\"republicaVirtualCep($event)\"\n              placeholder=\"CEP\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <input mdInput formControlName=\"address\" type=\"text\" \n              placeholder=\"Logradouro\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput formControlName=\"number\" type=\"text\" \n              placeholder=\"Número\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"district\" type=\"text\" \n              placeholder=\"Bairro\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"city\" type=\"text\" \n              placeholder=\"Município\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput formControlName=\"state\" type=\"text\" \n              placeholder=\"UF\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Tipo de telefone\" formControlName=\"company_phone_type\">\n              <md-option *ngFor=\"let phone of phoneType\" [value]=\"phone.value\">{{phone.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" *ngIf=\"buyerSignupForm.get('contact.company_phone_type').value\">\n            <md-input-container style=\"width: 90px; margin-right: 5px;\">\n              <input mdInput type=\"text\" placeholder=\"DDD\" formControlName=\"company_phone_ddd\">\n            </md-input-container>\n            <md-input-container style=\"width: 110px;\">\n              <input mdInput type=\"text\" placeholder=\"Número\" formControlName=\"company_phone_number\"\n              maxlength=\"10\">\n            </md-input-container>            \n            <a md-mini-fab \n            *ngIf=\"buyerSignupForm.get('contact.company_phone_ddd').value && buyerSignupForm.get('contact.company_phone_number').value\"\n            (click)=\"createBuyerContactPhoneObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Mídia Social\" (change)=\"onChangeRepresentativeSocialMediaType($event)\">\n              <md-option *ngFor=\"let socialMedia of socialMedias\" [value]=\"socialMedia.value\">{{socialMedia.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" *ngIf=\"representativeSocialMediaTypeChanged\">\n            <md-input-container style=\"width: 300px;\">\n              <input mdInput type=\"text\" placeholder=\"URL da mídia social\" formControlName=\"company_social_media\">\n            </md-input-container>            \n            <a md-mini-fab \n            *ngIf=\"buyerSignupForm.get('contact.company_social_media').value\" \n            (click)=\"createRepresentativeSocialMediaObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput formControlName=\"company_email\" type=\"text\" \n              placeholder=\"E-mail\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <input mdInput formControlName=\"company_site\" type=\"text\" \n              placeholder=\"Site\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <div *ngIf=\"companyPhoneObject.length > 0\"> \n          <md-chip-list>  \n            <span *ngFor=\"let companyPhone of companyPhoneObject; let i = index;\" class=\"contact-phone-list\">\n              <md-chip>\n                <span class=\"fs10 mr5\">({{companyPhone.ddd}}){{companyPhone.number}}</span>\n                <span (click)=\"clearBuyerRepresentativePhone(i)\"><md-icon class=\"fs10\">clear</md-icon></span>\n              </md-chip>              \n            </span>\n          </md-chip-list>\n        </div>\n      </md-tab>\n\n      <md-tab label=\"Representantes\" \n      *ngIf=\"companyBusiness\"\n      formGroupName=\"representative\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"1\">\n            <md-select placeholder=\"Título\" formControlName=\"representative_treatment\">\n              <md-option *ngFor=\"let treatment of treatments\" [value]=\"treatment.value\">{{treatment.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" \n              placeholder=\"CPF\" \n              formControlName=\"representative_cpf\"\n              [textMask]=\"{mask: mask.cpf}\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" placeholder=\"Nome\" \n              formControlName=\"representative_name\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" placeholder=\"Cargo\" \n              formControlName=\"representative_position\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput placeholder=\"Nascimento\" \n              [textMask]=\"{mask: mask.date}\"\n              formControlName=\"representative_birthday\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Escolaridade\" \n            formControlName=\"representative_schooling\">\n              <md-option *ngFor=\"let schoolingChoice of schooling\" [value]=\"schoolingChoice.value\">{{schoolingChoice.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n          \n          <!--Representative phone: start -->\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Tipo de telefone\" formControlName=\"representative_phone_type\">\n              <md-option *ngFor=\"let phone of phoneType\" [value]=\"phone.value\">{{phone.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" \n          *ngIf=\"buyerSignupForm.get('representative.representative_phone_type').value\">\n            <md-input-container style=\"width: 90px; margin-right: 5px;\">\n              <input mdInput type=\"text\" placeholder=\"DDD\" formControlName=\"representative_phone_ddd\">\n            </md-input-container>\n            <md-input-container style=\"width: 110px;\">\n              <input mdInput type=\"text\" placeholder=\"Número\" formControlName=\"representative_phone_number\"\n              maxlength=\"10\">\n            </md-input-container>            \n            <a md-mini-fab \n            *ngIf=\"buyerSignupForm.get('representative.representative_phone_ddd').value && buyerSignupForm.get('representative.representative_phone_number').value\" \n            (click)=\"createBuyerRepresentativePhoneObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n          <!--Representative phone: end -->\n          \n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\" placeholder=\"E-mail\"\n              formControlName=\"representative_email\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_postal_code\"\n              (change)=\"republicaVirtualBuyerCepToRepresentative($event)\"\n              placeholder=\"CEP\"\n              [textMask]=\"{mask: mask.zip}\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_address\"\n              placeholder=\"Logradouro\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_city\"\n              placeholder=\"Cidade\">\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"1\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              formControlName=\"representative_state\"\n              placeholder=\"UF\">\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <div *ngIf=\"buyerSignupForm.get('representative.representative_treatment').value &&\n        buyerSignupForm.get('representative.representative_cpf').value && \n        buyerSignupForm.get('representative.representative_name').value && \n        buyerSignupForm.get('representative.representative_position').value && \n        buyerSignupForm.get('representative.representative_birthday').value &&\n        buyerSignupForm.get('representative.representative_schooling').value && \n        buyerSignupForm.get('representative.representative_email').value && \n        buyerSignupForm.get('representative.representative_postal_code').value && \n        buyerSignupForm.get('representative.representative_address').value &&\n        buyerSignupForm.get('representative.representative_city').value &&\n        buyerSignupForm.get('representative.representative_state').value\">\n          <a md-raised-button color=\"primary\" (click)=\"createBuyerRepresentativeObject()\">Adicionar Representantes</a>\n        </div>\n\n        <div *ngIf=\"representativePhoneObject.length > 0\"> \n          <md-chip-list>  \n            <span *ngFor=\"let representativePhone of representativePhoneObject; let i = index;\" class=\"contact-phone-list\">\n              <md-chip>\n                <span class=\"fs10 mr5\">({{representativePhone.ddd}}){{representativePhone.number}}</span>\n                <span (click)=\"clearBuyerRepresentativePhone(i)\"><md-icon class=\"fs10\">clear</md-icon></span>\n              </md-chip>              \n            </span>\n          </md-chip-list>\n        </div>\n\n        <div *ngIf=\"representativeObject.length > 0\"> \n          <md-chip-list>  \n            <span *ngFor=\"let representative of representativeObject; let i = index;\">\n              <md-chip>\n                <span class=\"fs10 mr5\">{{representative.cpf}}</span>\n                <span (click)=\"clearBuyerRepresentative(i)\"><md-icon class=\"fs10\">clear</md-icon></span>\n              </md-chip>              \n            </span>\n          </md-chip-list>\n        </div>\n      </md-tab>\n\n      <md-tab label=\"Atividade\" *ngIf=\"companyBusiness\" formGroupName=\"activity\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Setor\" formControlName=\"subgroup_id\"\n            (change)=\"filterProduct($event)\"\n            multiple>\n              <md-option *ngFor=\"let subgroup of subgroups\" [value]=\"subgroup.id\">{{subgroup.name}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\" *ngIf=\"productObject\">\n            <md-select placeholder=\"Produtos\" formControlName=\"product_id\"\n            multiple>\n              <md-option *ngFor=\"let product of productObject\" [value]=\"product.id\">{{product.name}}</md-option>\n            </md-select>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-tab>\n\n      <md-tab label=\"Interesses\" *ngIf=\"companyBusiness\" formGroupName=\"interest\">\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Eventos nacionais/internacionais que sua empresa participou\" \n              formControlName=\"participation_events\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Interesses da empresa / Observações\"\n              formControlName=\"company_interests\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\"\n              placeholder=\"% de faturamento de vendas locais\"\n              (keyup)=\"onChangeRepresentativeLocalRevenues($event)\">\n            </md-input-container>\n\n            <a md-mini-fab *ngIf=\"createRepresentativeLocalRevenuesObjectButton\" (click)=\"createLocalRevenuesObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"2\">\n            <md-select placeholder=\"Outros estados\"\n            (change)=\"onChangeStatesBusiness($event)\">\n              <md-option *ngFor=\"let state of states\" [value]=\"state.description\">{{state.description}}</md-option>\n            </md-select>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\" [disabled]=\"statesBusinessChanged == undefined\"\n              placeholder=\"% de faturamento\"\n              (keyup)=\"onChangeRepresentativeOtherStateRevenues($event)\">\n            </md-input-container>\n\n            <a md-mini-fab *ngIf=\"createRepresentativeOtherStateRevenuesObjectButton\" (click)=\"createOtherStateRevenuesObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"2\">\n            <md-input-container>\n              <input mdInput placeholder=\"Outros países\" \n              [mdAutocomplete]=\"auto\" \n              formControlName=\"revenues_country\"\n              (keyup)=\"filterCountries($event)\">\n            </md-input-container>\n\n            <md-autocomplete #auto=\"mdAutocomplete\">\n              <md-option *ngFor=\"let country of filteredCountries\" [value]=\"country.country_name_pt\">\n                {{country.country_name_pt}}\n              </md-option>\n            </md-autocomplete>\n          </md-grid-tile>\n\n          <md-grid-tile [colspan]=\"3\">\n            <md-input-container>\n              <input mdInput type=\"text\" [disabled]=\"countriesBusinessChanged == undefined\"\n              placeholder=\"% de faturamento\"\n              (keyup)=\"onChangeRepresentativeOtherCountryRevenues($event)\">\n            </md-input-container>\n\n            <a md-mini-fab *ngIf=\"createRepresentativeOtherCountryRevenuesObjectButton\" (click)=\"createOtherCountryRevenuesObject()\">\n              <md-icon color=\"primary\">add</md-icon>\n            </a>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" *ngIf=\"representativeRevenuesObject.length > 0\">\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Perfil do parceiro\"\n              formControlName=\"partner_profile\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" rowHeight=\"100px\">\n          <md-grid-tile [colspan]=\"4\">\n            <md-input-container>\n              <textarea mdInput placeholder=\"Capacidade de Venda (Exportação) / Mês (Unidades)\"\n              formControlName=\"sales_capacity\">\n              </textarea>\n            </md-input-container>\n          </md-grid-tile>\n        </md-grid-list>\n\n        <md-grid-list cols=\"8\" *ngIf=\"representativeRevenuesObject.length > 0\">\n          <div *ngFor=\"let revenue of representativeRevenuesObject\">\n            {{revenue.place}}\n          </div> \n         </md-grid-list>\n      </md-tab>\n    </md-tab-group>\n\n    <md-card-actions>\n      <button type=\"submit\" md-raised-button color=\"primary\" [disabled]=\"!buyerSignupForm.valid\">Cadastrar</button>\n    </md-card-actions>\n  </form>\n  <!--Comprador: fim-->\n</md-card>"

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    urlToApi: 'https://events.al.senai.br/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*Firebase*/

var CrudService = (function () {
    function CrudService(http) {
        var _this = this;
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlToApi;
        /*
          CREATE
          Problema:
          Performance tá uma merda porque em cada iteração de elemento está sendo feita uma ação com o firebase
          Porque:
          Para lidar com subchilds suas propriedades e valores dentro da child que está sendo iterada, por exemplo, é preciso alterar a ref para a child, por isso não dá pra simplesmente montar todo o objeto e enviar pra uma mesma ref
          Solução:
          Pensar
        */
        this.create = function (source, params) { return new Promise(function (resolve, reject) {
            var route = params.route;
            switch (source) {
                case 'laravel':
                    var arr = void 0;
                    var check = void 0;
                    var countChildIteration = void 0; //Para ver se é a primeira iteração da child e definir se a acão será push ou update
                    var keyToUpdate = void 0; //APAGAR NO CASO DE RESOLVER A SITUAÇÃO DE MELHORA DA PERFORMANCE
                    var lastKey = void 0;
                    var lastSubchild = void 0;
                    var obj = void 0;
                    var objectFromSpecificKey = void 0;
                    var ref = void 0;
                    var ref2 = void 0;
                    var setKey = void 0;
                    var objectToCreate = params.objectToCreate;
                    if (!route) {
                        reject({
                            cod: "c-01",
                            message: "Informar erro c-01 ao administrador"
                        });
                    }
                    _this.headersToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem('access_token')
                    });
                    _this.optionsToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                        'headers': _this.headersToAuth
                    });
                    _this.http
                        .post(_this.url + route, objectToCreate, _this.optionsToAuth).subscribe(function (res) {
                        resolve({
                            cod: "c-02",
                            message: "Cadastro feito com sucesso" //Cadastro feito com sucesso
                        });
                    });
                    break;
                default:
                    console.log("Faltando source");
            }
        }); };
        this.readArray = function (source, params) { return new Promise(function (resolve, reject) {
            var hide = ""; //E.g.: [field1, field2, field3]
            var route = "";
            var show = ""; //E.g.: [field1, field2, field3]
            switch (source) {
                case "laravel":
                    var orderByChild = params.orderByChild;
                    var equalTo = void 0;
                    var ref = void 0;
                    var key = void 0;
                    var obj_1;
                    var objFiltered_1 = [];
                    var objKeys_1;
                    var res = void 0;
                    var apiUrl = _this.url;
                    var objFilteredTemp_1 = [];
                    var orderBy = void 0;
                    var setGet = '';
                    var where = void 0; //E.g.: [[field1, operator1, value1], [field2, operator2, value2], [field3, operator3, value3]]
                    if (!params) {
                        reject({
                            cod: "ra-01",
                            message: "Informar erro ra-01 ao administrador" //Checar parâmetros obrigatórios
                        });
                    }
                    if (params.show && params.hide) {
                        reject({
                            cod: "ra-02",
                            message: "Informar erro ra-03 ao administrador" //Não pode declarar os dois parâmetros ao mesmo tempo
                        });
                    }
                    if (!params.route) {
                        reject({
                            cod: "ra-03",
                            message: "Informar erro ra-04 ao administrador" //É preciso declarar a rota do serviço
                        });
                    }
                    else {
                        route = params.route;
                    }
                    if (params.show) {
                        setGet = "?";
                        show = "show=[";
                        for (var lim = params.show.length, i = 0; i < lim; i++) {
                            show += params.show[i] + ",";
                        }
                        show = show.substring(0, show.length - 1) + "]";
                    }
                    if (params.hide) {
                        setGet = "?";
                        hide = "hide=";
                        for (var lim = params.hide.length, i = 0; i < lim; i++) {
                            hide += params.hide[i] + ",";
                        }
                        hide = hide.substring(0, hide.length - 1);
                    }
                    _this.headersToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem('access_token')
                    });
                    _this.optionsToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                        'headers': _this.headersToAuth
                    });
                    console.log(apiUrl + route + setGet + show);
                    _this.http
                        .get(apiUrl + route + setGet + show + hide, _this.optionsToAuth).subscribe(function (res) {
                        obj_1 = JSON.parse(res['_body']);
                        objFiltered_1 = obj_1.data;
                        objKeys_1 = Object.keys(objFiltered_1);
                        if (params.show) {
                            objFilteredTemp_1 = obj_1.data;
                            objFiltered_1 = [];
                            for (var lim = objFilteredTemp_1.length, i = 0; i < lim; i++) {
                                var temp = {};
                                for (var j = 0; j < params.show.length; j++) {
                                    temp[params.show[j]] = objFilteredTemp_1[i][params.show[j]];
                                }
                                objFiltered_1.push(temp);
                            }
                            obj_1 = objFiltered_1;
                            resolve({
                                obj: obj_1
                            });
                        }
                        else {
                            obj_1 = objFiltered_1;
                            resolve({
                                obj: obj_1
                            });
                        }
                    });
                    break;
                default:
                    console.log("Faltando source");
            }
        }); };
        this.readObject = function (source, params) { return new Promise(function (resolve, reject) {
            switch (source) {
                case 'laravel':
                    var apiUrl = _this.url;
                    var route = params.route;
                    var value = params.value;
                    var child = void 0;
                    var orderByChild = void 0;
                    var equalTo = void 0;
                    var ref = void 0;
                    var key = void 0;
                    var obj_2;
                    var res = void 0;
                    if (!route) {
                        reject({
                            cod: "ro-01",
                            message: "Informar erro ro-01 ao administrador"
                        });
                    }
                    if (!value) {
                        reject({
                            cod: "ro-02",
                            message: "Informar erro ro-02 ao administrador"
                        });
                    }
                    _this.headersToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem('access_token')
                    });
                    _this.optionsToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                        'headers': _this.headersToAuth
                    });
                    _this.http
                        .get(apiUrl + route + "/" + value, _this.optionsToAuth).subscribe(function (res) {
                        obj_2 = JSON.parse(res['_body']);
                        resolve({
                            obj: obj_2
                        });
                    });
                    break;
                default:
                    console.log("Faltando source");
            }
        }); };
        this.update = function (source, params) { return new Promise(function (resolve, reject) {
            switch (source) {
                case 'laravel':
                    var arr = void 0;
                    var check = void 0;
                    var child = params.child;
                    var countChildIteration = void 0;
                    var idChildToUpdate = params.idChildToUpdate;
                    var lastKey = void 0;
                    var lastSubchild = void 0;
                    var obj = void 0;
                    var objectToUpdate = params.objectToUpdate;
                    var ref = void 0;
                    var ref2 = void 0;
                    var setKey = void 0;
                    var updateFromSpecificKey = void 0;
                    var apiUrl = _this.url;
                    var objectToCreate = params.objectToCreate;
                    var route = params.route;
                    var value = params.value;
                    if (!route) {
                        reject({
                            cod: "u-01",
                            message: "Informar erro u-01 ao administrador"
                        });
                    }
                    if (!value) {
                        reject({
                            cod: "u-02",
                            message: "Informar erro u-02 ao administrador"
                        });
                    }
                    _this.headersToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem('access_token')
                    });
                    _this.optionsToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                        'headers': _this.headersToAuth
                    });
                    _this.http
                        .put(apiUrl + route + "/" + value, objectToCreate, _this.optionsToAuth).subscribe(function (res) {
                        resolve({
                            cod: "u-03",
                            message: "Atualização feita com sucesso"
                        });
                    });
                    break;
                default:
                    console.log("Faltando source");
            }
        }); };
        this.upload = function (source, params) { return new Promise(function (resolve, reject) {
            switch (source) {
                case 'laravel':
                    var arr = void 0;
                    var check = void 0;
                    var countChildIteration = void 0; //Para ver se é a primeira iteração da child e definir se a acão será push ou update
                    var keyToUpdate = void 0; //APAGAR NO CASO DE RESOLVER A SITUAÇÃO DE MELHORA DA PERFORMANCE
                    var lastKey = void 0;
                    var lastSubchild = void 0;
                    var obj = void 0;
                    var objectFromSpecificKey = void 0;
                    var ref = void 0;
                    var ref2 = void 0;
                    var setKey = void 0;
                    var apiUrl = _this.url;
                    var objectToCreate = params.objectToCreate;
                    var route = params.route;
                    if (!route) {
                        reject({
                            cod: "u-01",
                            message: "Informar erro c-01 ao administrador"
                        });
                    }
                    _this.headersToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                        'Authorization': sessionStorage.getItem('access_token')
                    });
                    _this.optionsToAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
                        'headers': _this.headersToAuth
                    });
                    _this.http
                        .post(apiUrl + route, objectToCreate, _this.optionsToAuth).subscribe(function (res) {
                        resolve({
                            cod: "u-02",
                            message: "Upload feito com sucesso"
                        });
                    });
                    break;
                default:
                    console.log("Faltando source");
            }
        }); };
    }
    return CrudService;
}());
CrudService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CrudService);

var _a;
//# sourceMappingURL=crud.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutsidersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutsidersService = (function () {
    function OutsidersService(http) {
        var _this = this;
        this.http = http;
        this.republicaVirtualCepSearch = function (cep) { return new Promise(function (resolve, reject) {
            _this.http.get('http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep + '&formato=json').subscribe(function (res) {
                resolve(res);
            });
        }); };
        this.receitaWsCnpjSearch = function (cnpj) { return new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Access-Control-Allow-Origin': '*'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: header });
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlToApi + "receitaws?cnpj=" + cnpj).subscribe(function (res) {
                resolve(res);
            });
        }); };
    }
    return OutsidersService;
}());
OutsidersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], OutsidersService);

var _a;
//# sourceMappingURL=outsiders.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyValidators; });
var MyValidators = (function () {
    function MyValidators() {
        this.subgroup = function (control) {
            if (control.value != 1) {
                if (control.value != 1) {
                    return { "Apenas membros da indústria podem participar do evento": true };
                }
            }
            return null;
        };
    }
    return MyValidators;
}());

//# sourceMappingURL=my-validators.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_brazilian_states__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_countries__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_selects__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_outsiders_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_validators_my_validators__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*Services*/


/**
 * Validators
 */

/**rxjs */


var AppComponent = (function () {
    function AppComponent(outsidersService, crud, validator) {
        var _this = this;
        this.outsidersService = outsidersService;
        this.crud = crud;
        this.validator = validator;
        this.countries = __WEBPACK_IMPORTED_MODULE_3__data_countries__["a" /* countries */];
        this.states = __WEBPACK_IMPORTED_MODULE_2__data_brazilian_states__["a" /* brazilianStates */];
        this.errors = [];
        /*activity products by subgroup trouble: start*/
        this.subgroupChanged = false;
        /*company address trouble: start*/
        /*company phone trouble: start*/
        this.companyPhoneObject = [];
        this.createContactPhoneObjectButton = false;
        /*company phone trouble: end*/
        /*representative phone trouble: start*/
        this.representativePhoneObject = [];
        this.createRepresentativePhoneObjectButton = false;
        /*company phone trouble: end*/
        /*representative revenues trouble: start*/
        this.representativeRevenuesObject = [];
        this.createRepresentativeLocalRevenuesObjectButton = false;
        this.createRepresentativeOtherStateRevenuesObjectButton = false;
        this.createRepresentativeOtherCountryRevenuesObjectButton = false;
        this.representativeSocialMediaObject = [];
        this.createRepresentativeSocialMediaObjectButton = false;
        this.representativeObject = [];
        /*representative: end*/
        this.groups = [];
        this.subgroups = [];
        this.products = [];
        this.mask = {
            cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
            cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
            date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
            zip: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
            phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
            cell_phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,]
        };
        //SELECTS values
        this.phoneType = __WEBPACK_IMPORTED_MODULE_4__data_selects__["a" /* selects */][0].phoneType;
        this.socialMedias = __WEBPACK_IMPORTED_MODULE_4__data_selects__["a" /* selects */][0].socialMedias;
        this.treatments = __WEBPACK_IMPORTED_MODULE_4__data_selects__["a" /* selects */][0].treatment;
        this.schooling = __WEBPACK_IMPORTED_MODULE_4__data_selects__["a" /* selects */][0].schooling;
        this.languages = __WEBPACK_IMPORTED_MODULE_4__data_selects__["a" /* selects */][0].languages;
        this.onChangeCompanyBusiness = function (event) {
            if (event) {
                _this.companyBusiness = event.value;
            }
            else {
                _this.companyBusiness = undefined;
            }
        };
        /*Activity: start*/
        this.filterProduct = function (event) {
            if (event.value.length > 0) {
                _this.productObject = [{}];
                var productsArray = [];
                var finalArray = [];
                for (var lim = _this.products.length, i = 0; i < lim; i++) {
                    for (var lim2 = event.value.length, j = 0; j < lim2; j++) {
                        if (event.value[j] == _this.products[i].subgroup_id) {
                            productsArray.push(_this.products[i]);
                        }
                    }
                }
                _this.productObject = productsArray;
            }
            else {
                _this.productObject = undefined;
            }
        };
        this.onChangeSubgroup = function (event) {
            _this.subgroupChanged = false;
            _this.errors = _this.removeObjectFromObjectArrayByPropertyValue(_this.errors, 'code', 'err-submes');
            if (event.value.length > 0) {
                for (var lim = event.value.length, i = 0; i < lim; i++) {
                    if (event.value[i] == 1) {
                        _this.subgroupChanged = true;
                    }
                }
                if (!_this.subgroupChanged) {
                    _this.errors.push({
                        code: "err-submes",
                        message: "Atividade - Ramos de Atividade: apenas membros da indústria podem participar do evento"
                    });
                }
            }
        };
        /*Activity: end*/
        /*Seller Contact phones: start*/
        this.clearContactPhone = function (index) {
            _this.companyPhoneObject.splice(index, 1);
        };
        this.createContactPhoneObject = function () {
            _this.companyPhoneObject.push({
                phone_type_id: _this.signupForm.get('contact.company_phone_type').value,
                country_code: "+55",
                ddd: _this.signupForm.get('contact.company_phone_ddd').value,
                number: _this.signupForm.get('contact.company_phone_number').value
            });
            _this.signupForm.get('contact.company_phone_type').patchValue(null);
            _this.signupForm.get('contact.company_phone_ddd').patchValue(null);
            _this.signupForm.get('contact.company_phone_number').patchValue(null);
        };
        /*Seller Contact phones: end*/
        /*Buyer Contact phones: start*/
        this.clearBuyerContactPhone = function (index) {
            _this.companyPhoneObject.splice(index, 1);
        };
        this.createBuyerContactPhoneObject = function () {
            _this.companyPhoneObject.push({
                phone_type_id: _this.buyerSignupForm.get('contact.company_phone_type').value,
                country_code: "+55",
                ddd: _this.buyerSignupForm.get('contact.company_phone_ddd').value,
                number: _this.buyerSignupForm.get('contact.company_phone_number').value
            });
            _this.buyerSignupForm.get('contact.company_phone_type').patchValue(null);
            _this.buyerSignupForm.get('contact.company_phone_ddd').patchValue(null);
            _this.buyerSignupForm.get('contact.company_phone_number').patchValue(null);
        };
        /*Buyer Contact phones: end*/
        /*Seller Representative: start*/
        this.clearRepresentative = function (index) {
            _this.representativeObject.splice(index, 1);
        };
        this.createRepresentativeObject = function () {
            _this.representativeObject.push({
                cpf: _this.signupForm.get('representative.representative_cpf').value,
                treatment: _this.signupForm.get('representative.representative_treatment').value,
                name: _this.signupForm.get('representative.representative_name').value,
                position: _this.signupForm.get('representative.representative_position').value,
                email: _this.signupForm.get('representative.representative_email').value,
                phones: _this.representativePhoneObject,
                birthday: _this.signupForm.get('representative.representative_birthday').value,
                schooling: _this.signupForm.get('representative.representative_schooling').value,
                postal_code: _this.signupForm.get('representative.representative_postal_code').value,
                address: _this.signupForm.get('representative.representative_address').value,
                city: _this.signupForm.get('representative.representative_city').value,
                state: _this.signupForm.get('representative.representative_state').value
            });
            _this.signupForm.get('representative.representative_cpf').patchValue(null),
                _this.signupForm.get('representative.representative_treatment').patchValue(null),
                _this.signupForm.get('representative.representative_name').patchValue(null),
                _this.signupForm.get('representative.representative_position').patchValue(null),
                _this.signupForm.get('representative.representative_email').patchValue(null),
                _this.signupForm.get('representative.representative_birthday').patchValue(null),
                _this.signupForm.get('representative.representative_schooling').patchValue(null),
                _this.signupForm.get('representative.representative_postal_code').patchValue(null),
                _this.signupForm.get('representative.representative_address').patchValue(null),
                _this.signupForm.get('representative.representative_city').patchValue(null),
                _this.signupForm.get('representative.representative_state').patchValue(null);
        };
        /*Seller Representative: end*/
        /*Buyer Representative: start*/
        this.clearBuyerRepresentative = function (index) {
            _this.representativeObject.splice(index, 1);
        };
        this.createBuyerRepresentativeObject = function () {
            _this.representativeObject.push({
                cpf: _this.buyerSignupForm.get('representative.representative_cpf').value,
                treatment: _this.buyerSignupForm.get('representative.representative_treatment').value,
                name: _this.buyerSignupForm.get('representative.representative_name').value,
                position: _this.buyerSignupForm.get('representative.representative_position').value,
                email: _this.buyerSignupForm.get('representative.representative_email').value,
                phones: _this.representativePhoneObject,
                birthday: _this.buyerSignupForm.get('representative.representative_birthday').value,
                schooling: _this.buyerSignupForm.get('representative.representative_schooling').value,
                postal_code: _this.buyerSignupForm.get('representative.representative_postal_code').value,
                address: _this.buyerSignupForm.get('representative.representative_address').value,
                city: _this.buyerSignupForm.get('representative.representative_city').value,
                state: _this.buyerSignupForm.get('representative.representative_state').value
            });
            _this.buyerSignupForm.get('representative.representative_cpf').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_treatment').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_name').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_position').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_email').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_birthday').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_schooling').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_postal_code').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_address').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_city').patchValue(null),
                _this.buyerSignupForm.get('representative.representative_state').patchValue(null);
        };
        /*Buyer Representative: end*/
        /*Seller Representative phones: start*/
        this.clearRepresentativePhone = function (index) {
            _this.representativePhoneObject.splice(index, 1);
        };
        this.createRepresentativePhoneObject = function () {
            _this.representativePhoneObject.push({
                phone_type_id: _this.signupForm.get('representative.representative_phone_type').value,
                country_code: "+55",
                ddd: _this.signupForm.get('representative.representative_phone_ddd').value,
                number: _this.signupForm.get('representative.representative_phone_number').value,
            });
            _this.signupForm.get('representative.representative_phone_type').patchValue(null);
            _this.signupForm.get('representative.representative_phone_ddd').patchValue(null);
            _this.signupForm.get('representative.representative_phone_number').patchValue(null);
        };
        /*Seller Representative phones: end*/
        /*Buyer Representative phones: start*/
        this.clearBuyerRepresentativePhone = function (index) {
            _this.representativePhoneObject.splice(index, 1);
        };
        this.createBuyerRepresentativePhoneObject = function () {
            _this.representativePhoneObject.push({
                phone_type_id: _this.buyerSignupForm.get('representative.representative_phone_type').value,
                country_code: "+55",
                ddd: _this.buyerSignupForm.get('representative.representative_phone_ddd').value,
                number: _this.buyerSignupForm.get('representative.representative_phone_number').value,
            });
            _this.buyerSignupForm.get('representative.representative_phone_type').patchValue(null);
            _this.buyerSignupForm.get('representative.representative_phone_ddd').patchValue(null);
            _this.buyerSignupForm.get('representative.representative_phone_number').patchValue(null);
        };
        /*Buyer Representative phones: end*/
        /*Representative revenues: start*/
        this.onChangeRepresentativeLocalRevenues = function (event) {
            if (event) {
                _this.representativeLocalRevenuesChanged = event.srcElement.value;
                _this.createRepresentativeLocalRevenuesObjectButton = true;
            }
        };
        this.createLocalRevenuesObject = function () {
            _this.representativeRevenuesObject.push({
                place_type: 'local',
                place: 'local',
                revenues: _this.representativeLocalRevenuesChanged
            });
            _this.representativeLocalRevenuesChanged = undefined;
        };
        this.clearRepresentativeLocalRevenues = function (index) {
            _this.representativeLocalRevenuesChanged.splice(index, 1);
        };
        this.onChangeStatesBusiness = function (event) {
            _this.statesBusinessChanged = event.value;
        };
        this.onChangeRepresentativeOtherStateRevenues = function (event) {
            if (event) {
                _this.representativeOtherStateRevenuesChanged = event.srcElement.value;
                _this.createRepresentativeOtherStateRevenuesObjectButton = true;
            }
        };
        this.createOtherStateRevenuesObject = function () {
            _this.representativeRevenuesObject.push({
                place_type: 'brazilian_state',
                place: _this.statesBusinessChanged,
                revenues: _this.representativeOtherStateRevenuesChanged
            });
            _this.representativeOtherStateRevenuesChanged = undefined;
        };
        this.clearRepresentativeOtherStateRevenues = function (index) {
            _this.representativeOtherStateRevenuesChanged.splice(index, 1);
        };
        this.onChangeCountriesBusiness = function (event) {
            _this.countriesBusinessChanged = event.value;
        };
        this.onChangeRepresentativeOtherCountryRevenues = function (event) {
            if (event) {
                _this.representativeOtherCountryRevenuesChanged = event.srcElement.value;
                _this.createRepresentativeOtherCountryRevenuesObjectButton = true;
            }
        };
        this.createOtherCountryRevenuesObject = function () {
            _this.representativeRevenuesObject.push({
                place_type: 'country',
                place: _this.countriesBusinessChanged,
                revenues: _this.representativeOtherCountryRevenuesChanged
            });
            _this.representativeOtherCountryRevenuesChanged = undefined;
        };
        this.clearRepresentativeOtherCountryRevenues = function (index) {
            _this.representativeOtherCountryRevenuesChanged.splice(index, 1);
        };
        /*Representative revenues: end*/
        /*Representative social medias: start*/
        this.clearRepresentativeSocialMedia = function (index) {
            _this.representativeSocialMediaObject.splice(index, 1);
        };
        this.createRepresentativeSocialMediaObject = function () {
            _this.representativeSocialMediaObject.push({
                digital_data_type: _this.representativeSocialMediaTypeChanged,
                url: _this.representativeSocialMediaURLChanged
            });
            _this.representativeSocialMediaTypeChanged = undefined;
        };
        this.onChangeRepresentativeSocialMediaURL = function (event) {
            if (event) {
                _this.representativeSocialMediaURLChanged = event.srcElement.value;
                _this.createRepresentativeSocialMediaObjectButton = true;
            }
        };
        this.onChangeRepresentativeSocialMediaType = function (event) {
            if (event.value) {
                _this.representativeSocialMediaTypeChanged = event.value;
            }
        };
        /*Representative social medias: end*/
        /*Share it?: start*/
        this.createNewObjectFromArrayOfObjects = function (objectsArray) {
            var newObject = {};
            for (var lim = objectsArray.length, i = 0; i < lim; i++) {
                for (var key in objectsArray[i]) {
                    if (objectsArray[i][key] != undefined && objectsArray[i][key] != null) {
                        newObject[key] = objectsArray[i][key];
                    }
                    else {
                        newObject[key] = null;
                    }
                }
            }
            _this.crud.create('laravel', { route: 'registration' });
        };
        this.removeObjectFromObjectArrayByPropertyValue = function (objectsArray, property, value) {
            var newObject = objectsArray.filter(function (property) {
                property !== value;
            });
            return newObject;
        };
        this.republicaVirtualCep = function (event) {
            var cep = event.srcElement.value;
            _this.outsidersService
                .republicaVirtualCepSearch(cep)
                .then(function (res) {
                var string = JSON.stringify(res), object = JSON.parse(string);
                _this.addressObject = JSON.parse(object._body);
            });
        };
        this.republicaVirtualCepToRepresentative = function (event) {
            var cep = event.srcElement.value;
            _this.outsidersService
                .republicaVirtualCepSearch(cep)
                .then(function (res) {
                var string = JSON.stringify(res), object = JSON.parse(string);
                _this.representativeAddressObject = JSON.parse(object._body);
                _this.signupForm.get('representative.representative_address').patchValue(_this.representativeAddressObject.logradouro);
                _this.signupForm.get('representative.representative_city').patchValue(_this.representativeAddressObject.cidade);
                _this.signupForm.get('representative.representative_state').patchValue(_this.representativeAddressObject.uf);
            });
        };
        this.republicaVirtualBuyerCepToRepresentative = function (event) {
            var cep = event.srcElement.value;
            _this.outsidersService
                .republicaVirtualCepSearch(cep)
                .then(function (res) {
                var string = JSON.stringify(res), object = JSON.parse(string);
                _this.representativeAddressObject = JSON.parse(object._body);
                _this.buyerSignupForm.get('representative.representative_address').patchValue(_this.representativeAddressObject.logradouro);
                _this.buyerSignupForm.get('representative.representative_city').patchValue(_this.representativeAddressObject.cidade);
                _this.buyerSignupForm.get('representative.representative_state').patchValue(_this.representativeAddressObject.uf);
            });
        };
        this.receitaWsCnpj = function (event) {
            var cnpj = event.srcElement.value.replace(/[-./]/gi, '');
            _this.outsidersService
                .receitaWsCnpjSearch(cnpj)
                .then(function (res) {
                var string = JSON.stringify(res), object = JSON.parse(string);
                _this.companyObject = JSON.parse(object._body);
                _this.signupForm.get('company.business_name').patchValue(_this.companyObject.nome);
                _this.signupForm.get('company.tranding_name').patchValue(_this.companyObject.fantasia);
                _this.signupForm.get('company.foundation_year').patchValue(_this.companyObject.abertura);
                _this.signupForm.get('contact.postal_code').patchValue(_this.companyObject.cep);
                _this.signupForm.get('contact.address').patchValue(_this.companyObject.logradouro);
                _this.signupForm.get('contact.number').patchValue(_this.companyObject.numero);
                _this.signupForm.get('contact.district').patchValue(_this.companyObject.bairro);
                _this.signupForm.get('contact.city').patchValue(_this.companyObject.municipio);
                _this.signupForm.get('contact.state').patchValue(_this.companyObject.uf);
                if (_this.companyObject.capital_social) {
                    var number = Number(_this.companyObject.capital_social);
                    var size = void 0;
                    if (number < 60000) {
                        size = "mei";
                    }
                    else if (number < 360000) {
                        size = "micro";
                    }
                    else {
                        size = "pequena";
                    }
                    _this.signupForm.get('company.company_size').patchValue(size);
                }
            });
        };
        this.receitaWsBuyerCnpj = function (event) {
            var cnpj = event.srcElement.value.replace(/[-./]/gi, '');
            _this.outsidersService
                .receitaWsCnpjSearch(cnpj)
                .then(function (res) {
                var string = JSON.stringify(res), object = JSON.parse(string);
                _this.companyObject = JSON.parse(object._body);
                _this.buyerSignupForm.get('company.business_name').patchValue(_this.companyObject.nome);
                _this.buyerSignupForm.get('company.tranding_name').patchValue(_this.companyObject.fantasia);
                _this.buyerSignupForm.get('company.foundation_year').patchValue(_this.companyObject.abertura);
                _this.buyerSignupForm.get('contact.postal_code').patchValue(_this.companyObject.cep);
                _this.buyerSignupForm.get('contact.address').patchValue(_this.companyObject.logradouro);
                _this.buyerSignupForm.get('contact.number').patchValue(_this.companyObject.numero);
                _this.buyerSignupForm.get('contact.district').patchValue(_this.companyObject.bairro);
                _this.buyerSignupForm.get('contact.city').patchValue(_this.companyObject.municipio);
                _this.buyerSignupForm.get('contact.state').patchValue(_this.companyObject.uf);
                if (_this.companyObject.capital_social) {
                    var number = Number(_this.companyObject.capital_social);
                    var size = void 0;
                    if (number < 60000) {
                        size = "mei";
                    }
                    else if (number < 360000) {
                        size = "micro";
                    }
                    else {
                        size = "pequena";
                    }
                }
            });
        };
        /*Share it?: end*/
        this.onSubmit = function () {
            var representativesObject = {
                representatives: _this.representativeObject
            };
            var phonesObject = {
                phones: _this.companyPhoneObject
            };
            console.log(phonesObject);
            _this.createNewObjectFromArrayOfObjects([
                _this.signupForm,
                phonesObject,
                representativesObject
            ]);
        };
        this.onBuyerSubmit = function () {
            var representativesObject = {
                representatives: _this.representativeObject
            };
            var phonesObject = {
                phones: _this.companyPhoneObject
            };
            _this.createNewObjectFromArrayOfObjects([
                _this.buyerSignupForm,
                phonesObject,
                representativesObject
            ]);
        };
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'company': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'cnpj_number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'business_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'tranding_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'foundation_year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'employees_quantity': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'legal_person': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'company_size': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            }),
            'contact': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'postal_code': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'district': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'company_email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'company_site': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_social_media': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_phone_type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_phone_ddd': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_phone_number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            }),
            'representative': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'representative_treatment': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_cpf': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_position': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_birthday': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_schooling': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_postal_code': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_phone_type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_phone_ddd': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_phone_number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            }),
            'interest': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'company_interests': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'participation_events': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'revenues_country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'sales_capacity': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            }),
            'activity': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'group_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'subgroup_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'product_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            })
        });
        this.buyerSignupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'company': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'cnpj_number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'business_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'tranding_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'foundation_year': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'employees_quantity': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'legal_person': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'language': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            }),
            'contact': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'postal_code': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'district': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'company_email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'company_site': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_social_media': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_phone_type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_phone_ddd': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'company_phone_number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            }),
            'representative': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'representative_treatment': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_cpf': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_position': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_birthday': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_schooling': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_postal_code': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_phone_type': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_phone_ddd': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'representative_phone_number': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            }),
            'interest': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'company_interests': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'partner_profile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'participation_events': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'revenues_country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
                'sales_capacity': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            }),
            'activity': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                'subgroup_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                'product_id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            })
        });
        this.filteredCountries = this.countries;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyBusiness = 1;
        this.crud.readArray('laravel', {
            route: 'groups?noPaginate=true'
        })
            .then(function (res) {
            var temp;
            temp = res;
            _this.groups = temp.obj;
        });
        this.crud.readArray('laravel', {
            route: 'subgroups?where[group_id]=1'
        })
            .then(function (res) {
            var temp;
            temp = res;
            _this.subgroups = temp.obj;
        });
        this.crud.readArray('laravel', {
            route: 'products'
        })
            .then(function (res) {
            var temp;
            temp = res;
            _this.products = temp.obj;
        });
    };
    AppComponent.prototype.filterCountries = function (val) {
        var r = val.srcElement.value;
        if (val != null) {
            this.filteredCountries = this.countries.filter(function (s) { return s.country_name_pt.toLowerCase().indexOf(r.toLowerCase()) === 0; });
        }
        else {
            this.filteredCountries = this.countries;
        }
        return this.filteredCountries;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgForm"]) === "function" && _a || Object)
], AppComponent.prototype, "form", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_outsiders_service__["a" /* OutsidersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_outsiders_service__["a" /* OutsidersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_validators_my_validators__["a" /* MyValidators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_validators_my_validators__["a" /* MyValidators */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.bundle.js.map