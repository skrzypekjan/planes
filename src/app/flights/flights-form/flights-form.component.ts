import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Crew, Flight} from '../../models/flight.model';

@Component({
  selector: 'app-flights-form',
  templateUrl: './flights-form.component.html',
  styleUrls: ['./flights-form.component.scss']
})
export class FlightsFormComponent implements OnInit {
  form: FormGroup;
  @Input() editMode = false;
  jobs = [
    { label: 'Stweradess', value: 'stweradess'},
    { label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    { label: 'Pilot', value: 'pilot'},
    { label: 'Co-Pilot', value: 'co_pilot'},
    { label: 'Mechanic', value: 'mechanic'},

  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  setFlight(flight: Flight) {
    const {key, ...formData} = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
  }

  get crew(){
    return this.form.get('crew') as FormArray;
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group( {
      name: crewMember.name || '',
      job: crewMember.job || ''
    });
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  private buildForm(){
    this.form = this.formBuilder.group( {
      origin: ['', { validators: [Validators.required]}],
      destination: ['', { validators: [Validators.required]}],
      departureTime: ['', { validators: [Validators.required]}],
      returnTime: ['', { validators: [Validators.required]}],
      code: ['SJ', { validators: [Validators.required, Validators.minLength(4),
        Validators.maxLength(7)]}],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    });
  }

}
