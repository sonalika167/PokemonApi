import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "https://pokeapi.co/api/v2/pokemon/";

 detailurl = "";

  showPokemonLists(){
    return this.http.get(this.url);
  }

  showPokemonDetails(url0){
    return this.http.get(url0);
  }
}
