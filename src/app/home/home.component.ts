import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { tap, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pharmaArr: Array<any>;
  defaultTabId = 'tab-total-spending';
  currentTabId = this.defaultTabId;
  tabRouteMap = {
    'tab-total-spending': 'totalspending',
    'tab-spending-per-capita': 'spendingpercapita',
    'tab-spending-by-country': 'spendingbycountry'
  };

  @ViewChild('tabs') tabs: NgbTabset;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.dataService
      .getPharmaData()
      .pipe(
        tap((resp: Array<any>) => {
          this.pharmaArr = resp;
          const tabId = this.route.snapshot.data['tab'] || this.defaultTabId;
          this.tabs.select(tabId);
        }),
        finalize(() => {})
      )
      .subscribe();
  }

  onTabChange(evt: NgbTabChangeEvent) {
    console.log('onTabChange', evt.nextId);
    this.currentTabId = evt.nextId;
    const route = this.tabRouteMap[this.currentTabId];
    this.location.go(route);
  }
}
