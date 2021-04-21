import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rates } from 'src/app/models/apiResponse.model';
import { Cuenta, Usuario } from 'src/app/models/usuario.model';
import { BilleteraService } from 'src/app/service/billetera.service';
import { DivisasService } from './../../../service/divisas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cuentaPesos: number;
  nombresDivisas = [];
  user: Usuario;
  balancePesos: number;
  deposito: number;
  divisas: Rates;

  cuentaDesde: Cuenta;
  CuentaHacia: Cuenta;
  divisaSelected: any;
  cantidadCambio: number;
  obj: any;
  
  constructor(private divisasService: DivisasService, private billeteraService: BilleteraService) {
  }

  ngOnInit(): void {
    this.divisas = JSON.parse(localStorage.getItem('Divisas'));
    for (const key of Object.keys(this.divisas)) {
      this.nombresDivisas.push(key);
    }
    console.log(this.divisas);
    this.user = JSON.parse(localStorage.getItem('Usuario'));
  }

  setCuentaHacia(value: string): void{
    this.divisaSelected = this.divisas[value];
    const precioEnCuentaDesde = 1 / this.divisaSelected * this.divisas[this.cuentaDesde.codigo];
    console.log(precioEnCuentaDesde);
    this.obj = {
      nombre: value,
      valor: precioEnCuentaDesde
    };
  }

  abrirModal(): void{
    document.getElementById('modal').className += 'is-active';
  }

  cerrarModal(): void{
    document.getElementById('modal').className = 'modal';
  }

  depositar(): void{
    this.user.cuentas.map(e => {
      if (e.codigo === 'ARS'){
        e.saldo += this.deposito;
      }
    });
    localStorage.setItem('Usuario', JSON.stringify(this.user));
    this.cuentaPesos = this.user.cuentas.filter(res => {
      return res.codigo === 'ARS';
    })[0].saldo;
    this.deposito = 0;
    this.cerrarModal();
  }

  comprar(): void{
    if(this.cantidadCambio > this.cuentaDesde.saldo){
      return;
    }

    if (this.user.cuentas.filter(e => e.codigo === this.obj.nombre).length > 0){
      this.user.cuentas.map(e => {
        if (e.codigo === this.obj.nombre){
          e.saldo += this.cantidadCambio / this.obj.valor;
        }
      });
    } else {
      this.user.cuentas.push({codigo: this.obj.nombre, saldo: this.cantidadCambio / this.obj.valor});
    }

    this.user.cuentas.map(e => {
      if(e.codigo === this.cuentaDesde.codigo){
        e.saldo -= this.cantidadCambio;
      }
    })

    localStorage.setItem('Usuario', JSON.stringify(this.user));
  }

  // ordenarCuentas(): void{
  //   this.cuentas = this.cuentas.sort((a, b) => {
  //       if (a.saldo > b.saldo) {
  //         return 1;
  //       }
  //       if (a.saldo < b.saldo) {
  //         return -1;
  //       }
  //       return 0;
  //   }).splice(0, 3);
  // }

  // getBalanceEnPesos(): void{
  //   this.balancePesos = 0;
  //   const divisas = this.divisasService.getDivisas();
  //   // console.log(divisas.ARS);
  //   this.cuentas.map(cuenta => {
  //     this.balancePesos += (cuenta.saldo / divisas[cuenta.codigo]) * divisas.ARS;
  //   });
  // }

  // getCuentaEnPesos(): void{
  //   this.cuentaPesos = this.cuentas.filter(cuenta => {
  //     return cuenta.codigo === 'ARS';
  //   })[0];
  // }

}
