import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  //pag kuha ng data sa api
  getPlanet() {
    return this.http.get("https://swapi.co/api/planets/")
  }


  getPlanets(name: string) {
    return this.getPlanet().pipe(
      map((planets: any) =>  {
        return planets.results.find(planet => planet.name === name);
      })
    );
  }



}

// https://swapi.co/api/planets/
// https://swapi.co/api/planets
