import { Component, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  res_arr: any;
  constructor(private weatherService: WeatherService) { }



  getWeatherUpdate(name) {
    // console.log(name)
    this.weatherService.getWeather(name.city_name).subscribe((data) => {
      this.res_arr = data;
      let today = new Date();
      this.res_arr.dt = today.toString();
      let time = new Date().toLocaleTimeString();
      this.res_arr.time = time;

    });
    // console.log(this.res_arr);

  };






};
