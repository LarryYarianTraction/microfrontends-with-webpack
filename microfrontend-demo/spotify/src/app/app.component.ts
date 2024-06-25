import { AsyncPipe } from '@angular/common'
import { Component, OnChanges, SimpleChanges } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SongSeekerComponent } from './song-seeker/song-seeker.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, FormsModule, SongSeekerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {
  searchText: string = ''

  ngOnChanges (changes: SimpleChanges): void {
    console.log(changes['searchText'])
  }
}
