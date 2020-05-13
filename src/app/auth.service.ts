import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "https://pokeapi.co/api/v2/pokemon/";      //root API url

 detailurl = "";                                   //Global variable to get the api url from button onclick

  showPokemonLists(){
    return this.http.get(this.url);               //returning the pokemon list url
  }

  showPokemonDetails(url0){
    return this.http.get(url0);                   //returning the pokemon details url
  }
}
