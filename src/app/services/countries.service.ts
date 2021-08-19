import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {
  }


  async listCountries(): Promise<any> {
    const path = 'all';
    const retorno: any = await this.http.get(environment.apiUrl + path).toPromise();
    sessionStorage.setItem('data', JSON.stringify(retorno));
    return retorno;
  }

  async listCountriesByName(pais: string): Promise<any> {
    const path = 'name';
    return await this.http.get(environment.apiUrl + path + '/' + pais + '?fullText=true').toPromise();
  }


}
