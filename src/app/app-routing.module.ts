import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'vencomats/home', pathMatch: 'full' },
  {
    path: 'vencomats',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
