import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre: string = '';

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || '';
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  async goDatabase() {
    const nombreUsuario = 'usuario_de_prueba'; 
    await this.storageService.setItem('nombreUsuario', nombreUsuario);
    this.router.navigate(['/home']);
  }

  login() {
    console.log('Iniciar sesión con el nombre:', this.nombre);
  }
}



