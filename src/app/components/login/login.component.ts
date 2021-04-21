import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) { }


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
      this.router.navigateByUrl('home/dashboard');
    }
  }

}
