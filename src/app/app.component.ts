import { Component, OnInit } from '@angular/core';
import { CovidService } from '../app/shared/services/covid.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  covid$: Observable<any>;
  covidresult:number;
  experiment:number;
 
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covid$ = this.covidService.getCovid();
    this.covid$.subscribe(result => this.covidresult = result );
    this.experiment = parseInt(this.covidresult);

  }

  // getTimer() {
  //   let time = new Date().getTime();
  // }

}
