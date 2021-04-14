import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [ 'truckName', 'dispatch', 'city', 'state', 'when', 'comments', 'actions' ];
  trucks: Truck[] = [];
  dataSource = new MatTableDataSource<Truck>(this.trucks);
  private destroy$ = new Subject();

  constructor(
    private truckService: TruckService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.truckService.getTrucks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((trucks: Truck[]) => {
        this.trucks = trucks;
        this.dataSource = new MatTableDataSource<Truck>(this.trucks);
      });
  }

  confirmDelete(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(answer => {
        if (answer) {
          this.deleteTruck(id);
        }
      })
  }

  private deleteTruck(id: number): void {
    this.truckService.deleteTruck(id)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const index: number = this.trucks.findIndex(truck => truck.truckId === id);
        this.trucks.splice(index, 1);
        this.dataSource = new MatTableDataSource<Truck>(this.trucks);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
