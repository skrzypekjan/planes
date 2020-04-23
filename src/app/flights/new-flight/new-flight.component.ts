import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FlightsFormComponent} from '../flights-form/flights-form.component';
import {FlightsService} from '../../core/services/flights.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})

export class NewFlightComponent {

  @ViewChild('flightForm') flightForm: FlightsFormComponent;

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private toast: MatSnackBar,
    private flightsService: FlightsService
  ) { }

  createFlight(){
    console.log(this.flightForm);
    this.flightsService.addFlight(this.flightForm.form.value)
      .then(this.onCreatingSucces.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSucces(){
    this.dialogRef.close();
    this.toast.open('Flight has been successfully created!', '',{panelClass: 'toast-success'});
  }

  private onCreatingFailure(error){
    console.log('some error');
    this.toast.open(error.message, '',{panelClass: 'toast-error'});
  }

}
