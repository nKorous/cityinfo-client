import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/city';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cityList: City[] = []

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCityList();
  }

  getCityList() {
    this.dataService.getCities().subscribe(cityList => this.cityList = cityList)
  }

  handleCityClick(cityId: number) {
    this.router.navigate(["/city", cityId])
  }
}
