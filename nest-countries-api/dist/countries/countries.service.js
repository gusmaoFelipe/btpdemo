"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let CountriesService = class CountriesService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCountriesByLanguage(lang) {
        return this.httpService
            .get('https://restcountries.com/v2/lang/' + lang.split('=')[1])
            .pipe(operators_1.map((response) => response.data.map(function (item) {
            return {
                name: item['name'],
                alpha2Code: item['alpha2Code'],
                region: item['region'],
                subregion: item['subregion'],
                timezones: item['timezones'],
                languagues: item['languages'].map((lang) => lang['iso639_1']),
                currencies: item['currencies'],
                flag: item['flag']
            };
        })));
    }
};
CountriesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map