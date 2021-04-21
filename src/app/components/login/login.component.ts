import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { BilleteraService } from 'src/app/service/billetera.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private billeteraService: BilleteraService) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  abrirModal(): void{
    document.getElementById('modal').className += 'is-active';
  }

  cerrarModal(): void{
    document.getElementById('modal').className = 'modal';
  }

  login(): void{
    if (this.loginForm.controls.usuario.value === this.loginForm.controls.password.value){
      const obj: Usuario = {
        nombreCompleto: 'Usuario de Prueba',
        dni: 12312312,
        cuit: '12-12312312-12',
        direccion: 'Calle Falsa 123',
        cuentas: [{codigo: 'ARS', saldo: 0}]
      };
      localStorage.setItem('Usuario', JSON.stringify(obj));
      this.router.navigateByUrl('home/dashboard');
    }
  }

}
