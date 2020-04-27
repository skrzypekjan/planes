import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Flight} from '../../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) { }

  getFlights(): Observable<Flight[]>{
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  // method to get one flight
  getFlight(key: string): Observable<Flight>{
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(flight => this.assignKey(flight)));
  }

  // method of sending a flight to firebase
  addFlight(flight: Flight){
    return this.db.list<Flight>(this.API_URL).push(flight);
  }

  private assignKey(flight) {
    return {...flight.payload.val(), key: flight.key};
  }
}
