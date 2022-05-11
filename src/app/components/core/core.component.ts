import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() public sidenavToggle = new EventEmitter();
  rol: any = localStorage.getItem('rol');
  constructor(private router: Router) {}

  @ViewChild('sidenav')
  sidenav?: MatSidenav;
  ngOnInit(): void {}
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  goToHomePage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/vencomats/home');
  }

  goToFilterPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/vencomats/filtros');
  }

  goToLoginPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/vencomats/login');
  }

  goToRegisterPage() {
    this.sidenav?.toggle();
    this.router.navigateByUrl('/vencomats/register');
  }

  logout() {
    //this.authService.logout();
  }
}
