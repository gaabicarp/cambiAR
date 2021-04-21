import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.scss']
})
export class BilleteraComponent implements OnInit {
  cuentas: any;

  constructor() { }

  ngOnInit(): void {
    this.cuentas = JSON.parse(localStorage.getItem('Usuario')).cuentas;
    console.log(this.cuentas);
  }

}
