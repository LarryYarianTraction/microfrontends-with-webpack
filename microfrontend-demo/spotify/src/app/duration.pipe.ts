import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const totalSeconds =  value / 1000
    const durationMinutes = Math.trunc(totalSeconds / 60)
    const durationSeconds = totalSeconds % 60
    
    return `${durationMinutes}:${durationSeconds.toString(10).padStart(2, '0')}`
  }

}
