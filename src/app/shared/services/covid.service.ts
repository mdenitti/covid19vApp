import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { last, map,max,takeLast,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url: string;
  
  constructor(private http: HttpClient) {
    this.url = 'https://disease.sh/v3/covid-19/vaccine/coverage/countries/belgium';
  }

  getCovid():Observable<any> {
    return this.http.get<any>(this.url)
    .pipe(
      // een buis, die de stroom van data kan manipuleren aka PIPE
      map(
        function (res) {
          let result = Object.values(res.timeline)
          // let result = res.timeline; ook met datums... country eruithalen... want dat is res.country
          let max = Math.max.apply(null, result);
          // nog meer op loslaten, verder data verfijnen, bewerken tot dat ik het gewenste eindresultaat heb
          return max
        }
      ),
      //nog eens piepen wat nu in de buis zit...
      tap (res => console.log(res))
    )
  }
}
