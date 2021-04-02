import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckListComponent } from './truck-list/truck-list.component';

const routes: Routes = [
  { path: 'truck-list', component: TruckListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckRoutingModule { }
