import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightsFormComponent } from './flights-form/flights-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';



@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, FlightsFormComponent,
    NewFlightComponent, FlightsFormComponent, DetailsComponent, EditFlightComponent],
  exports: [FlightsComponent, FlightsFormComponent
  ],
  // adding dynamic component
  entryComponents: [NewFlightComponent, DetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlightsModule { }
