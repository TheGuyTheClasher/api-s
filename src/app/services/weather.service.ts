import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private URI = "http://api.openweathermap.org/data/2.5/weather?q="

  getWeather(name) {
    return this.http.get(this.URI + name + "&units=metric&appid=1a519892f1765781dca5cbc681371375");
  }
};

