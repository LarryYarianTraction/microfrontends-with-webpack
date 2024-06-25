import { Component, Input } from '@angular/core'
import { Track } from '../track'
import { TrackComponent } from '../track/track.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-tracklist',
  standalone: true,
  imports: [TrackComponent, NgFor],
  templateUrl: './tracklist.component.html',
  styleUrl: './tracklist.component.scss'
})
export class TracklistComponent {
  @Input() tracks: Track[] | null = null
}
