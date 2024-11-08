import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {

  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/home']);
  }
  restablecer() {
    console.log('Restablecimiento de contraseña solicitado');
  }
}
