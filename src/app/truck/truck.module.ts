import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckRoutingModule } from './truck-routing.module';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckTableComponent } from './truck-table/truck-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [TruckListComponent, TruckTableComponent],
  imports: [
    CommonModule,
    TruckRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [ TruckListComponent ]
})
export class TruckModule { }
