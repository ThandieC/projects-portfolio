import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [HomeComponent, RouterModule],
})
export class HomeModule {}
