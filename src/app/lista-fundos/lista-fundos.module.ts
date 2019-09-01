import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaFundosPage } from './lista-fundos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFundosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: 'lista-fundos', component: ListaFundosPage }])
  ],
  declarations: [ListaFundosPage]
})
export class ListaFundosPageModule {}
