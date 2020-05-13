import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public auth: AuthService,public activatedRoute: ActivatedRoute) { }

  pokeData = {};
  pokemonName = '';
  detailurl = 'https://pokeapi.co/api/v2/pokemon/';

  ngOnInit(): void {
    this.pokemonName = this.activatedRoute.snapshot.paramMap.get("pokemonname");
    console.log(this.pokemonName);
    this.auth.showPokemonDetails(this.detailurl + this.pokemonName).subscribe((res)=>{
      console.log(res);
      this.pokeData = res;
    })
    console.log(this.auth.detailurl);
  }

}