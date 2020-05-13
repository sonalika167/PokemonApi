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
  notes:any;
  textArea = '';
  localStorageNotes = '';
  
  ngOnInit(): void {
    this.pokemonName = this.activatedRoute.snapshot.paramMap.get("pokemonname");
    console.log(this.pokemonName);
    this.auth.showPokemonDetails(this.detailurl + this.pokemonName).subscribe((res)=>{
      console.log(res);
      this.pokeData = res;
    })
    console.log(this.auth.detailurl);
    
    
    // get the stored notes from localStorage and put it inside textarea
    this.localStorageNotes = localStorage.getItem(this.pokemonName);
    if(this.localStorageNotes){
      this.textArea = this.localStorageNotes;
    }

  }

  updateNotes(e){
    console.log(e.value);
    this.textArea = e.value;

    // save the textarea notes to localstorage
    localStorage.setItem(this.pokemonName, this.textArea);
    alert("Saved Your notes!!")
  }

}