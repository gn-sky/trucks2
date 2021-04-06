import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from './truck';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private trucksUrl = 'api/trucks';

  constructor(private http: HttpClient) { }

  getTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(this.trucksUrl);
  }
}
