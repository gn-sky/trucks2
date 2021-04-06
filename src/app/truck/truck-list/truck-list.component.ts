import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent {
  displayedColumns: string[] = [ 'truckName', 'dispatch', 'city', 'state', 'when', 'comments' ];
  trucks: Observable<Truck[]>;

  constructor(private truckService: TruckService) {
    this.trucks = this.truckService.getTrucks();
  }
}
