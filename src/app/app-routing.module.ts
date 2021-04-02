import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckListComponent } from './truck/truck-list/truck-list.component';

const routes: Routes = [
  { path: 'truck-list', component: TruckListComponent },
  { path: '', redirectTo: 'truck-list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
