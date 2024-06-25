import { Component, Input } from '@angular/core'
import { BehaviorSubject, switchMap } from 'rxjs'
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
  private searchText$ = new BehaviorSubject<string | null>(null)
  get searchText(): string | null {
    return this.searchText$.getValue()
  }
  @Input() set searchText(value: string | null) {
    this.searchText$.next(value)
  }

  tracklist$ = this.searchText$.pipe(
    switchMap(searchText => this.spotifyApi.getTracks(searchText ?? undefined))
  )

  constructor (private spotifyApi: SpotifyApiService) { }
}
