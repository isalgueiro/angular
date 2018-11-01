import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TroncoComponent } from './tronco/tronco.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TroncoComponent],
  exports: [TroncoComponent]
})
export class TroncoModule { }
