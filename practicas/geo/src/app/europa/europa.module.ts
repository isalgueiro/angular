import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuropaComponent } from './europa/europa.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EuropaComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EuropaComponent]
})
export class EuropaModule { }
