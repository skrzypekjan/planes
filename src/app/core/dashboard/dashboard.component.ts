import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user = this.authService.user;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: MatSnackBar
  ) {}

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']))
      .then(user => this.toast.open('You have been logged out correctly! :)', '', {panelClass: 'toast-success'}))
      .catch(error => this.toast.open(error.message, '', {panelClass: 'toast-error'}));
  }
}
