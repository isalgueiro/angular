import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmericaComponent } from './america/america.component';
import { AmericaSurComponent } from './america-sur/america-sur.component';
import { AmericaNorteComponent } from './america-norte/america-norte.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AmericaComponent,
    children: [
      {
        path: 'norte',
        component: AmericaNorteComponent
      },
      {
        path: 'sur',
        component: AmericaSurComponent
      },
    ]
  },
  {
    path: 'central',
    component: AmericaNorteComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmericaComponent, AmericaSurComponent, AmericaNorteComponent]
})
export class AmericaModule { }
