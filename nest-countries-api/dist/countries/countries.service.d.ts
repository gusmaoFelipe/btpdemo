import { HttpService } from '@nestjs/common';
export declare class CountriesService {
    private httpService;
    constructor(httpService: HttpService);
    getCountriesByLanguage(lang: String): import("rxjs").Observable<any>;
}
