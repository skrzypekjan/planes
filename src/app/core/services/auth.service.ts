import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: {email: string, password: string}) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
}
