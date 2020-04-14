import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightsFormComponent } from './flights-form/flights-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, FlightsFormComponent,
    NewFlightComponent, FlightsFormComponent],
  exports: [FlightsComponent, FlightsFormComponent
  ],
  entryComponents: [NewFlightComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightsModule { }
