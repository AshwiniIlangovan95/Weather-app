import { HttpClient } from "@angular/common/http";
import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class weathernew {
   
    
    constructor(private http:HttpClient){}
    
    getWeatherDataforMultipleDates(cityName: string){
        return this.http.get(`api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=2&appid=6046a3dcb50982828e2655f9a26189e2&units=metric`)
    }

    getWeatherDataforCurrentDay(cityName: string){
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6046a3dcb50982828e2655f9a26189e2&units=metric`)
      }


}