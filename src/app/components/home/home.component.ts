import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { DivisasService } from 'src/app/service/divisas.service';
import { BilleteraService } from './../../service/billetera.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Usuario;
  deposito: number;
  divisas: any;

  constructor(private billeteraService: BilleteraService, private divisasService: DivisasService) {
    this.divisas = this.divisasService.getDivisasPrincipales();
  }

  ngOnInit(): void {
    this.divisasService.setDivisas();
  }

}
