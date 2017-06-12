import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'europa',
    pathMatch: 'full'
  },
  {
    path: 'europa',
    loadChildren: './europa/europa.module#EuropaModule'
  },
  {
    path: 'america',
    loadChildren: './america/america.module#AmericaModule'
  },
  {
    path: 'asia',
    loadChildren: './asia/asia.module#AsiaModule'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
