import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckRoutingModule } from './truck-routing.module';
import { TruckListComponent } from './truck-list/truck-list.component';


@NgModule({
  declarations: [TruckListComponent],
  imports: [
    CommonModule,
    TruckRoutingModule
  ],
  exports: [ TruckListComponent ]
})
export class TruckModule { }
