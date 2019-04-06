import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TotalSpendingComponent } from './total-spending/total-spending.component';
import { SpendingPerCapitaComponent } from './spending-per-capita/spending-per-capita.component';
import { SpendingByCountryComponent } from './spending-by-country/spending-by-country.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalSpendingComponent,
    SpendingPerCapitaComponent,
    SpendingByCountryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbTabsetModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'totalspending',
        component: HomeComponent,
        data: { tab: 'tab-total-spending' }
      },
      {
        path: 'spendingpercapita',
        component: HomeComponent,
        data: { tab: 'tab-spending-per-capita' }
      },
      {
        path: 'spendingbycountry',
        component: HomeComponent,
        data: { tab: 'tab-spending-by-country' }
      },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
