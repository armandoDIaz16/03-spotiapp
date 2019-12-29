import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // paises: any [] = [];
  nuevosLanzamientos: any[] = [];

  constructor(/*private http: HttpClient*/ private spotifyService: SpotifyService) {

    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe( (paises: any) => {
    //   this.paises = paises;
    //   console.log(paises);
    // });
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevosLanzamientos = data;
      });
  }

  ngOnInit() {
  }

}
