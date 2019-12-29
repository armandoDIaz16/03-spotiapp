import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCGl9K25dwt92QlyanctG9vwEHlyWI7aYHyXz1Lgs_UorFr0Fr5GqfRd9X5vMyRwExZZ-DMv7vY4r9x18E'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQDN51vraqtkso2UHpw4lGh3jX0FmQWZoAvp5Kyn9bd0C4mHyX0HfBdP2InpJRTMc8vsUNncb2UUhp84Cec'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtists(termino: string) {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQDN51vraqtkso2UHpw4lGh3jX0FmQWZoAvp5Kyn9bd0C4mHyX0HfBdP2InpJRTMc8vsUNncb2UUhp84Cec'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
