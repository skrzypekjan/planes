import {Component, OnInit, ViewChild} from '@angular/core';
import {Flight} from '../../models/flight.model';
import {FlightsService} from '../../core/services/flights.service';
import {ActivatedRoute} from '@angular/router';
import {FlightsFormComponent} from '../flights-form/flights-form.component';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements OnInit{
  @ViewChild('flightsForm') flightsForm: FlightsFormComponent;
  flight: Flight;
  keyy: string;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  onInit() {
    this.loadFlight();
  }

  private loadFlight() {
    const key = this.route.snapshot.params.key;
    this.keyy = key;
    this.flightsService.getFlight(key)
      .pipe(tap(flight => this.flightsForm.setFlight(flight)))
      .subscribe(flight => this.flight = flight);
  }

  ngOnInit(): void {
  }
}
