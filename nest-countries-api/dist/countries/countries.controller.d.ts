import { CountriesService } from './countries.service';
export declare class CountriesController {
    private countriesService;
    constructor(countriesService: CountriesService);
    getCountriesByLanguage(param: String): import("rxjs").Observable<any>;
}
