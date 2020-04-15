import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-flights-form',
  templateUrl: './flights-form.component.html',
  styleUrls: ['./flights-form.component.scss']
})

export class FlightsFormComponent implements OnInit {
  form: FormGroup;
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

  get crew(){
    return this.form.get('crew') as FormArray;
  }

  addCrewMember() {
    this.crew.push(this.buildCrewMember());
  }

  buildCrewMember() {
    return this.formBuilder.group( {
      name: '',
      job: ''
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
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }

}
