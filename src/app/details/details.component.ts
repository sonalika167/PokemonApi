import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public auth: AuthService) { }

pokeData = {};

  ngOnInit(): void {
    this.auth.showPokemonDetails(this.auth.detailurl).subscribe((res)=>{
      console.log(res);
      this.pokeData = res;
    })
  }

}
