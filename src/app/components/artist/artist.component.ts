import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiappService } from '../../services/spotiapp.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(private router:ActivatedRoute, private spotiapp:SpotiappService ) { }
  loading = true
  id:string
  artist
  tracks
  defaultImg= 'https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135__340.png'

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.getArtist(params['id'])
      this.getTracks(params['id'])
    })
  }

  getArtist(id:string){
    this.spotiapp.getArtistDetails(id)
    .subscribe((data:any) =>{
      console.log(data)
      this.artist = data
      this.loading = false
    })

  }

  getTracks(id:string){
    this.spotiapp.getTracks(id)
    .subscribe((data:any) =>{
      this.tracks = data
      console.log(data)
    })

  }

}
