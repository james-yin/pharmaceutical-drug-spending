import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-spending-by-country',
  templateUrl: './spending-by-country.component.html',
  styleUrls: ['./spending-by-country.component.css']
})
export class SpendingByCountryComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  @Input() pharmaArr: any[];

  constructor() {}

  ngOnInit() {
    const location = 'USA';
    const data = this.pharmaArr.filter(x => x.LOCATION === location);

    const years: string[] = [];
    data.forEach(x => {
      years.push(x.TIME);
    });
    this.lineChartLabels = years;

    const gdps: number[] = [];
    data.forEach(x => {
      gdps.push(x.PC_GDP);
    });

    this.lineChartData = [
      { data: gdps, label: `Percent of GDP in ${location}` }
    ];
  }
}
