import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ComponentserviceService } from './componentservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather_api';
  myChart: any = [];

  constructor(private _componentservice: ComponentserviceService) {
  }

  ngOnInit() {
    this._componentservice.showchartdata().subscribe((re: any) => {
      console.log(re);
      // decleration data
      let temp_max = re.properties.periods.map((res: any) => res.temperature);
      let temp_min = re.properties.periods.map((res: any) => res.temperature);
      let time = re.properties.periods.map((res: any) => res.startTime);
      let alldates = re.properties.periods.map((res: any) =>res.dt );

      let weatherDate: any = [];

      alldates.forEach((res: any) => {
        let jsdate = new Date(res);
        weatherDate.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
        console.log(weatherDate);
      });
      this.myChart = new Chart("myChart", {
        type: 'line',
        // Data run on chart
        data: {
          labels: time,
          datasets: [{
            label: 'Temperature Max',
            data: temp_max,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Temperature Min',
            data: temp_min,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });

  }

}
function result(arg0: string) {
  throw new Error('Function not implemented.');
}

