import { Component, effect, input } from '@angular/core'
import { Subject, switchMap } from 'rxjs'
import { SpotifyApiService } from '../spotify-api.service'
import { TracklistComponent } from '../tracklist/tracklist.component'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-song-seeker',
  standalone: true,
  imports: [AsyncPipe, TracklistComponent],
  templateUrl: './song-seeker.component.html',
  styleUrl: './song-seeker.component.scss'
})
export class SongSeekerComponent {
  searchText = input<string | null>(null)
  private searchText$ = new Subject<string | null>()

  tracklist$ = this.searchText$.pipe(
    switchMap(searchText => this.spotifyApi.getTracks(searchText ?? undefined))
  )

  constructor (private spotifyApi: SpotifyApiService) {
    effect(() => {
      const searchText = this.searchText()

      console.log(`Searching Spotify for '${searchText ?? ''}'...`)
      this.searchText$.next(searchText)
    })
  }
}
