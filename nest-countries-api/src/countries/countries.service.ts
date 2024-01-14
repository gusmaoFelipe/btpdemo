import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesService {
  constructor(private httpService: HttpService) {}

  /**
   * return the mapped json of the contries with the specified language from https://restcountries.com/v2/lang/
   * @param lang the language
   */
  getCountriesByLanguage(lang: string) {
    return this.httpService
      .get('https://restcountries.com/v2/lang/' + lang.split('=')[1])
      .pipe(
        map((response) =>
          response.data.map(function (item) {
            return {
              name: item['name'],
              alpha2Code: item['alpha2Code'],
              region: item['region'],
              subregion: item['subregion'],
              timezones: item['timezones'],
              languagues: item['languages'].map((lang) => lang['iso639_1']),
              currencies: item['currencies'],
              flag: item['flag'],
            };
          }),
        ),
      );
  }
}
