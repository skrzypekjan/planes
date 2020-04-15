import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FlightsFormComponent} from '../flights-form/flights-form.component';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {

  @ViewChild('flightForm') flightForm: FlightsFormComponent;
  constructor(private dialogRef: MatDialogRef<NewFlightComponent>) { }


}
