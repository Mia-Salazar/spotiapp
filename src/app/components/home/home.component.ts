import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SpotiappService } from '../../services/spotiapp.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrayCountries:any[] = []
  releases:any[] = []
  loading = true
  error = false
  errorMessage

  constructor(private http:HttpClient, private spotiapp:SpotiappService) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe(
    //   (response:any) => {
    //     this.arrayCountries = response
    //     //console.log(response)
    //   })

    this.spotiapp.newReleases()
      .subscribe((data:any) =>{
        this.releases = data
        this.loading = false
      }, (error) => {
        this.error = true
        this.errorMessage = error.error.error.message
      })
   }

  ngOnInit(): void {

  }

}
