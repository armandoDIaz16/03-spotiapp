import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  // termino: string = "algo";
  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    // this.termino = termino;
    this.spotifyService.getArtists(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
      });
  }
}
