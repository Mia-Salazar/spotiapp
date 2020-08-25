import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotiappService {

  constructor(private http:HttpClient) {
  }

  newReleases(){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBdYhZuS05GrIhi04x4LfGTnWisIEoD-j7ih6HBV_Qy9rBilAwAx64JktccLN4mrMazmNTTP-Wd07s2Reg'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .pipe(map(data => data['albums'].items
    ))
  }

  getArtist(term){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBdYhZuS05GrIhi04x4LfGTnWisIEoD-j7ih6HBV_Qy9rBilAwAx64JktccLN4mrMazmNTTP-Wd07s2Reg'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&offset=15`, { headers });
  }
}
