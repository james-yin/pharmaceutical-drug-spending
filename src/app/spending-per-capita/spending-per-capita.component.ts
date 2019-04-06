import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from 'ng2-charts';

@Component({
  selector: 'app-spending-per-capita',
  templateUrl: './spending-per-capita.component.html',
  styleUrls: ['./spending-per-capita.component.css']
})
export class SpendingPerCapitaComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales'
  ];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  @Input() pharmaArr: any[];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    const year = 2015;
    const data = this.pharmaArr.filter(x => x.TIME === year);

    const countries: string[] = [];
    data.forEach(x => {
      countries.push(x.LOCATION);
    });
    this.pieChartLabels = countries;

    const spendings: number[] = [];
    data.forEach(x => {
      spendings.push(x.USD_CAP);
    });
    this.pieChartData = spendings;
  }
}
