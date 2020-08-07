import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrayCountries:any[] = []

  constructor(
    private http:HttpClient
  ) {
      this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe(
          (response:any) => {
            this.arrayCountries = response
            console.log(response)
          })

   }

  ngOnInit(): void {
  }

}
