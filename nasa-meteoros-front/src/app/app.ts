import { MeteorosService } from './meteoros';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  startDate = "2025-07-19";
  endDate = "2025-07-19";
  construtor(private meteorosService: MeteorosService){

  }

  searchMeteoros() {
    this.meteorosService.getMeteors(this.startDate, this.endDate).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
}
