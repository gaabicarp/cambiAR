import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario.model';
import { DivisasService } from './divisas.service';

@Injectable({
  providedIn: 'root'
})
export class BilleteraService {
  // cuentas: Cuenta[];
  usuario: Usuario;

  constructor(private divisasService: DivisasService) { }

  // setUsuario(usuario: Usuario): void{
  //   console.log('asdasd')
  //   this.usuario = usuario;
  //   this.cuentas.push({codigo: 'ARS', saldo: 0});
  // }

  // setCuentas(): void{
  //   this.cuentas.push({codigo: 'ARS', saldo: 0})
  // }

  // getUsuario(): Usuario {
  //   return this.usuario;
  // }

  // depositarPesos(deposito: number): void{
  //   console.log(this.cuentas)
  //   this.cuentas.map(cuenta => {
  //     if (cuenta.codigo === 'ARS'){
  //       cuenta.saldo += deposito;
  //     }
  //   });
  // }

  // getCuentas(): Cuenta[]{
  //   return this.cuentas;
  // }

}
