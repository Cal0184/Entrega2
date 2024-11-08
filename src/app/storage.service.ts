import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage!: Storage;

  constructor(private storageService: Storage) {
    this.init();
  }

  private async init() {
    const storage = await this.storageService.create();
    this.storage = storage;
  }

  async addUserWithPassword(username: string, password: string) {
    const users = await this.getAllUsers();
    users.push({ username, password });
    await this.storage.set('allUsers', users);
  }

  async getAllUsers(): Promise<{ username: string; password: string }[]> {
    const users = await this.storage.get('allUsers');
    return users ? users : [];
  }

  async loadUsers(): Promise<{ username: string; password: string }[]> {
    const allUsers = await this.getAllUsers(); // Corrige la referencia aquí
    console.log('Usuarios en almacenamiento:', allUsers);
    return allUsers;
  }

  async getItem(key: string): Promise<any> {
    return await this.storage.get(key);
  }

  async setItem(key: string, value: any): Promise<void> {
    await this.storage.set(key, value);
  }

  async removeItem(key: string): Promise<void> {
    await this.storage.remove(key);
  }
}


