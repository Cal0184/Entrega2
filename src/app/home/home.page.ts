import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  nombre: string = '';
  password: string = ''; 
  isInputValid: boolean = true;
  isPasswordValid: boolean = true;

  constructor(
    private router: Router, 
    private storageService: StorageService,
    private alertController: AlertController  
  ) {}

  async login() {
    // Validar nombre y contraseña
    if (!this.nombre || this.nombre.trim() === '') {
      this.isInputValid = false;  
      await this.showAlert('Por favor, ingresa tu nombre de usuario para continuar.');
    } else if (!this.password || this.password.trim() === '') {
      this.isPasswordValid = false;
      await this.showAlert('Por favor, ingresa tu contraseña para continuar.');
    } else {
      this.isInputValid = true;
      this.isPasswordValid = true;
      await this.storageService.addUserWithPassword(this.nombre, this.password);
      this.router.navigate(['/login'], { queryParams: { nombre: this.nombre } });
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  
  async checkDataAndProceed() {
    const storedData = await this.storageService.getItem('nombreUsuario');
  }

  async storedData() {
    if (this.nombre && this.nombre.trim() !== '') {
      await this.storageService.setItem('nombreUsuario', this.nombre);  
      console.log('Nombre de usuario guardado:', this.nombre);
      this.router.navigate(['/database']);  
    } else {
      console.log('Por favor ingresa un nombre de usuario');
    }
  }
  
}
