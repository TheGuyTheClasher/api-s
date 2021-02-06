import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() weather_obj = [];


  res_obj: any;

  constructor() {

  }

  ngOnInit(): void {
    // this.res_obj = this.weather_obj;
    console.log(this.weather_obj);

  }


}
