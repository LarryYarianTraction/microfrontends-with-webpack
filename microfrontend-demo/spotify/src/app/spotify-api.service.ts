import { Injectable } from '@angular/core';
import { Track } from './track';
import { Observable, delay, map, of } from 'rxjs';

export { Track } from './track'

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  constructor() { }

  getTracks(search?: string): Observable<Track[]> {
    search = search?.toLowerCase()
    return of(TRACKLIST).pipe(
      delay(Math.random() * 2500),
      map((tracks) => tracks.filter(track => search == null || track.name.toLowerCase().includes(search)))
    )
  }
}

const TRACKLIST: Array<Track> = [
  {
      "name": "Sunset Boulevard",
      "artist": "City Lights",
      "durationMs": 270000,
      "albumCover": "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Moonlit Serenade",
      "artist": "Nocturnal Harmony",
      "durationMs": 315000,
      "albumCover": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Eternal Waves",
      "artist": "Shoreline Melodies",
      "durationMs": 240000,
      "albumCover": "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Radiant Skies",
      "artist": "Celestial Sound",
      "durationMs": 228000,
      "albumCover": "https://images.unsplash.com/photo-1483721310020-03333e577078",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Aurora Dreams",
      "artist": "Polar Lights",
      "durationMs": 295000,
      "albumCover": "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Twilight Mist",
      "artist": "Dusk Symphony",
      "durationMs": 272000,
      "albumCover": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Serenade of the Stars",
      "artist": "Stellar Orchestra",
      "durationMs": 261000,
      "albumCover": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Oceanic Waves",
      "artist": "Coastal Harmony",
      "durationMs": 312000,
      "albumCover": "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Golden Glow",
      "artist": "Sunset Symphony",
      "durationMs": 225000,
      "albumCover": "https://images.unsplash.com/photo-1483721310020-03333e577078",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Mystic Shore",
      "artist": "Oceanic Melody",
      "durationMs": 258000,
      "albumCover": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Starlit Sea",
      "artist": "Galactic Harmony",
      "durationMs": 230000,
      "albumCover": "https://images.unsplash.com/photo-1475777319946-13016d05d255",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Whispers of the Forest",
      "artist": "Nature's Echo",
      "durationMs": 255000,
      "albumCover": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Mystic Mountains",
      "artist": "Highland Melody",
      "durationMs": 305000,
      "albumCover": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Celestial Shores",
      "artist": "Ocean Symphony",
      "durationMs": 262000,
      "albumCover": "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Luminous Nights",
      "artist": "Nocturnal Glow",
      "durationMs": 245000,
      "albumCover": "https://images.unsplash.com/photo-1483721310020-03333e577078",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Serene Hills",
      "artist": "Peaceful Melodies",
      "durationMs": 235000,
      "albumCover": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Twilight Tranquility",
      "artist": "Evening Symphony",
      "durationMs": 252000,
      "albumCover": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Wandering Waves",
      "artist": "Coastal Echoes",
      "durationMs": 285000,
      "albumCover": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Harmonic Horizon",
      "artist": "Stellar Symphony",
      "durationMs": 300000,
      "albumCover": "https://images.unsplash.com/photo-1475777319946-13016d05d255",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Galactic Dreams",
      "artist": "Astral Harmony",
      "durationMs": 228000,
      "albumCover": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Mystic Twilight",
      "artist": "Dusk Echoes",
      "durationMs": 270000,
      "albumCover": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Radiant Waves",
      "artist": "Coastal Glow",
      "durationMs": 250000,
      "albumCover": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Aurora Symphony",
      "artist": "Polar Harmony",
      "durationMs": 290000,
      "albumCover": "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Twilight Journey",
      "artist": "Evening Melodies",
      "durationMs": 260000,
      "albumCover": "https://images.unsplash.com/photo-1483721310020-03333e577078",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Eternal Echoes",
      "artist": "Timeless Sounds",
      "durationMs": 252000,
      "albumCover": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  },
  {
      "name": "Mystic Harmony",
      "artist": "Serene Echoes",
      "durationMs": 275000,
      "albumCover": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "link": "https://open.spotify.com/track/76RlcCKb1M61iZCuV0PD6N?si=491d4010e32a4f49"
  }
]
