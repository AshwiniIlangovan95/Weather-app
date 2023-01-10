import { Component, OnInit } from '@angular/core';
import { weathernew } from 'src/services/rapidweather.service';

import { ServicesService } from 'src/services/services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weathernew';
  
  activeType: any = 'Today';
  weatherDataForMultipleDays:any="";
  weather:any="";

 
  // constructor(private weatherService: ServicesService) {}

  // ngOnInit() {
  //   this.weatherService.getWeatherData().subscribe(res=> {
      
  //     this.weatherData = res;
  //   }, err=> {
  //     ;
  //   }
  //   )
  // }
  constructor(private weatherservice:weathernew){}
  cityName:string="chennai";
  
  ngOnInit(){
    this.weatherservice.getWeatherDataforMultipleDates(this.cityName).subscribe(res=>{
      this.weatherDataForMultipleDays=res;
    })
    this.weatherservice.getWeatherDataforCurrentDay(this.cityName).subscribe(res=>{
      this.weather=res;
    })
  }

  searchData() {
    this.weatherservice.getWeatherDataforMultipleDates(this.cityName).subscribe(res=>{
      this.weatherDataForMultipleDays=res;
    })
    this.weatherservice.getWeatherDataforCurrentDay(this.cityName).subscribe(res=>{
      this.weather=res;
    })
  }

  setActiveType =(type: string)=> {
    this.activeType = type
  }
}
