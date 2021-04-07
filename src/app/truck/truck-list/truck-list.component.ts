import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [ 'truckName', 'dispatch', 'city', 'state', 'when', 'comments', 'actions' ];
  trucks: Truck[] = [];
  dataSource = new MatTableDataSource<Truck>(this.trucks);
  private ngUnsubsribe = new Subject();

  constructor(private truckService: TruckService) { }

  ngOnInit(): void {
    this.truckService.getTrucks()
      .pipe(
        takeUntil(this.ngUnsubsribe)
      )
      .subscribe((trucks: Truck[]) => {
        this.trucks = trucks;
        this.dataSource = new MatTableDataSource<Truck>(this.trucks);
      });
  }

  deleteTruck(id: number): void {
    this.truckService.deleteTruck(id)
      .pipe(
        takeUntil(this.ngUnsubsribe)
      )
      .subscribe(() => {
        const index: number = this.trucks.findIndex(truck => truck.truckId === id);
        this.trucks.splice(index, 1);
        this.dataSource = new MatTableDataSource<Truck>(this.trucks);
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubsribe.next();
    this.ngUnsubsribe.complete();
  }
}
