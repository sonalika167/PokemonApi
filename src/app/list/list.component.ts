import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public auth: AuthService) { }

  lists:any[] = [];

  ngOnInit(): void {
    this.auth.showPokemonLists().subscribe((res)=>{
      console.log(res["results"])
      for(let i=0;i<20;i++){
        this.lists.push(res["results"][i]);
      }
    })
  }

}
