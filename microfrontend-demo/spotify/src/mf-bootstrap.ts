import 'zone.js'
import { createCustomElement } from '@angular/elements'
import { createApplication } from '@angular/platform-browser'
import { SongSeekerComponent } from './app/song-seeker/song-seeker.component'

createApplication({ providers: [] })
  .then(app => {
    const songSeekerElement = createCustomElement(SongSeekerComponent, { injector: app.injector })
    customElements.define('spotify-song-seeker', songSeekerElement)
  })
  .catch(err => console.error(err))
