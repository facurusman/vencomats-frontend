import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() public sidenavToggle = new EventEmitter();
  //rol: any = localStorage.getItem('rol');
  rol:any='1'

  myControl = new FormControl();
  listaMateriales: string[] = [
    'Arena',
    'Piedras',
    'Aceros',
    'Aglomerantes',
    'Para Mezclas',
    'Instalaciones Sanitarias',
    'Instalaciones Eléctricas',
    'Instalaciones de Gas',
    'Prefabricados',
    'Aislantes',
    'Revestimientos',
    'Pisos',
    'Techos',
    'Ladrillos',
    'Construcción en Seco',
    'Enduidos',
    'Cales'
  ];

  listaProductos: string[] = [
    'Herramientas',
    'Aberturas',
    'Sanitarios',
    'Mobiliario',
    'Máquinas',
    'Rejas',
    'Aire Acondicionado',
    'Artefactos a Gas',
    'Artefactos Eléctricos'
  ]

  listaServicios: string[] = [
    'Movimientos de Suelo',
    'Herrería',
    'Carpintería',
    'Hormigón',
    'Albañilería',
    'Plomería',
    'Gas',
    'Electricidad',
    'Yesos',
    'Aire Acondicionado',
    'Volquetes',
    'Paisajismo',
    'Maestro Mayor de Obra',
    'Arquitectos',
    'Ingenieros',
    'Capataces de Obra',
    'Diseño Interior'
  ]
  options: string[] = ['Arena', 'Piedra', 'Cemento'];
  filteredOptions!: Observable<string[]>;

  constructor(private router: Router) {}

  @ViewChild('sidenav')
  sidenav?: MatSidenav;
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

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
