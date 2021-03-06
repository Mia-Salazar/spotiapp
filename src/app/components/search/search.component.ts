import { Component, OnInit } from '@angular/core';
import { SpotiappService } from '../../services/spotiapp.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchList:any[] = []
  constructor(private spotiapp:SpotiappService) { }

  ngOnInit(): void {
  }

  search(term:string){
    console.log(term)
    this.spotiapp.getArtist(term)
    .subscribe((data:any) =>{
      this.searchList = data.artists.items
      console.log(this.searchList)
    })
  }
}
