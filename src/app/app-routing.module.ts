import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CityComponent } from './components/city/city.component';
import { PointOfInterestComponent } from './components/point-of-interest/point-of-interest.component';

const routes: Routes = [
  { path: '', component: CitiesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'city/:id', component: CityComponent },
  { path: 'pointOfInterest/:id', component: PointOfInterestComponent },



  // This stays at the bottom
  { path: '**', pathMatch: 'full', redirectTo: '/cities' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
