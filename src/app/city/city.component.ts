import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { citiesList } from 'src/assets/citieslist';
import { city } from '../services/cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  citySearchForm!: UntypedFormGroup;
  cities!: city[];
  cityName = new UntypedFormControl();
  filteredcities!: Observable<city[] | undefined>;
  searchedcity! : city | undefined;

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit() {
    this.cities = citiesList;
    this.citySearchForm = this.formBuilder.group({
      cityName: [null, Validators.required]
    });
    this.filteredcities = this.cityName.valueChanges
      .pipe(
        startWith(''),
        map(
          value => {
            if (typeof value === 'string') {
              return this._filter(value);
            } else {
              return;
            }
          }
        )
      );
  }

  private _filter(value: string): city[] {
    const filterValue = value.toLowerCase();
  
    return this.cities.filter(city => city.name.toLowerCase().includes(filterValue));
  }

  oncitySelected(option: MatOption) {
    this.citySearchForm.get('cityName')?.setValue(option.value.id);
  }

  displayFn(city: city) {
    return city && city.name ? city.name : '';
  }

  onSubmit() {
    const searchedcityId = this.citySearchForm.value.cityName
    this.searchedcity = this.cities.find(city => city.id === searchedcityId);
  }
}

