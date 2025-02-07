import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabasePage } from './database.page';

const routes: Routes = [
  {
    path: '',
    component: DatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabasePageRoutingModule {}

