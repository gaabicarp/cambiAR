import { Injectable } from '@angular/core';
import { Rates } from '../models/apiResponse.model';
import { GetService } from './get.service';


@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  divisas: Rates;
  divisasPrincipales: any = [];

  constructor(private getService: GetService) {
   }

  setDivisas(): void{
    this.getService.getDivisas().subscribe(res => {
      console.log(res.rates.BRL);
      localStorage.setItem('Divisas', JSON.stringify(res.rates));
      this.divisasPrincipales.push(res.rates.USD, res.rates.EUR, res.rates.BTC, res.rates.JPY, res.rates.BRL, res.rates.ARS);
    });
  }

  getDivisas(): Rates{
    return this.divisas;
  }

  getDivisasPrincipales(): Array<any>{
    return this.divisasPrincipales;
  }


}
