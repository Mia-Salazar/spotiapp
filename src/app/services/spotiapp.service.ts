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
      'Authorization' : 'Bearer BQAVY2u5HhqpI9SD_XDM1mHmk9edUxX2mPKhOCGcRxLudLPGEf5rRlCYOomU-uZLKFtV2les2L1VgerOWJI'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .pipe(map(data => data['albums'].items
    ))
  }

  getArtist(term:string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAVY2u5HhqpI9SD_XDM1mHmk9edUxX2mPKhOCGcRxLudLPGEf5rRlCYOomU-uZLKFtV2les2L1VgerOWJI'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&offset=15`, { headers });
  }

  getArtistDetails(id:string) {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAVY2u5HhqpI9SD_XDM1mHmk9edUxX2mPKhOCGcRxLudLPGEf5rRlCYOomU-uZLKFtV2les2L1VgerOWJI'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, { headers });
  }

  getTracks(id:string) {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAVY2u5HhqpI9SD_XDM1mHmk9edUxX2mPKhOCGcRxLudLPGEf5rRlCYOomU-uZLKFtV2les2L1VgerOWJI'
    })
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=ES`, { headers })
    .pipe(map(data => data['tracks']
    ))

  }
}
