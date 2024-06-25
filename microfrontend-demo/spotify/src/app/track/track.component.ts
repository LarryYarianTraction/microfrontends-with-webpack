import { Component, Input } from '@angular/core'
import { Track } from '../track'
import { DurationPipe } from '../duration.pipe'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [DurationPipe, NgIf],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss'
})
export class TrackComponent {
  @Input() track: Track | null = null
}
