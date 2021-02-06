import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() weather_obj;



  constructor() {

  }

  ngOnInit(): void {


  }


}
