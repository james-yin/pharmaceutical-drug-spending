import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-total-spending',
  templateUrl: './total-spending.component.html',
  styleUrls: ['./total-spending.component.css']
})
export class TotalSpendingComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];

  @Input() pharmaArr: any[];

  constructor() {}

  ngOnInit() {
    const year = 2015;
    const data = this.pharmaArr.filter(x => x.TIME === year);

    const countries: string[] = [];
    data.forEach(x => {
      countries.push(x.LOCATION);
    });
    this.barChartLabels = countries;

    const totalSpendings: number[] = [];
    data.forEach(x => {
      totalSpendings.push(x.TOTAL_SPEND);
    });
    this.barChartData = [
      { data: totalSpendings, label: `Total Spending in ${year}` }
    ];
  }
}
