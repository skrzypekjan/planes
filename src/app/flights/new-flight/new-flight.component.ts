import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FlightsFormComponent} from '../flights-form/flights-form.component';
import {FlightsService} from '../../core/services/flights.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})

export class NewFlightComponent {

  @ViewChild('flightForm') flightForm: FlightsFormComponent;

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private flightsService: FlightsService
  ) { }

  createFlight(){
    console.log(this.flightForm);
    this.flightsService.addFlight(this.flightForm.form.value)
      .then(this.onCreatingSucces.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSucces(){
    this.dialogRef.close();
  }

  private onCreatingFailure(){
    console.log('some error');
  }

}
