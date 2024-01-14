import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  /**
   * Return the json response JSON response containing 'name', 'alpha2Code', 'languagues', 'flag'
   * of the country with the corresponding language
   * @param param the language
   */
  @Get('/:lang')
  getCountriesByLanguage(@Param('lang') param: string) {
    return this.countriesService.getCountriesByLanguage(param);
  }
}
