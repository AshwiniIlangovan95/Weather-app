import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http: HttpClient) { }

  getWeatherData(){
    
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=13.1342176&lon=80.2058381&appid=6046a3dcb50982828e2655f9a26189e2')
  }

  
}
