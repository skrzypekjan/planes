import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';



@NgModule({
  declarations: [FlightsComponent, FlightCardComponent],
  exports: [FlightsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class FlightsModule { }
