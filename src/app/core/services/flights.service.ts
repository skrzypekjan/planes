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
  // list of all flights
  getFlights(): Observable<Flight[]>{
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  // method to get one flight
  getFlight(key: string): Observable<Flight> {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(flight => this.assignKey(flight)));
  }
  // method save editing flight
  editFlight(key: string, flight: Flight) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).update(flight);
  }

  // method to remove flight
  removeFlight(key: string) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).remove();
  }

  // method of sending a flight to firebase
  addFlight(flight: Flight){
    return this.db.list<Flight>(this.API_URL).push(flight);
  }

  // create new flight
  private assignKey(flight) {
    return {...flight.payload.val(), key: flight.key};
  }
}
