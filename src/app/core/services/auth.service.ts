import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {UserInfo} from 'firebase';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$ = this.fireAuth.authState;
  private userData: UserInfo;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: {email: string, password: string}) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user);
  }

  register(credentials: {email: string, password: string}) {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout() {
    return this.fireAuth.signOut();
  }

  isLoggedIn() {
    return !!this.userData;
  }

  get user() {
    return this.userData;
  }
}
