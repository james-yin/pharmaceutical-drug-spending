# Pharmaceutical Drug Spending - DEV PROCESS

## Design and architecture

- single page application in Angular framework
- json data source provided by https://storage.googleapis.com/gweb-dat-coding-challenge-data-sources/pharmaceutical_drug_spending_by_counties.json
- tabset component from ng-bootstrap library as a navigation tool for the 3 different visuals
  -- Total Spending
  -- Spending per Capita
  -- Spending by Country
- data is initially loaded at application launch and be available for all visuals' consumption
- each tab click routes to a new url that loads the correct visual component

## Decisions and assumptions

- data source is always available
- only 3 visual components provided
- rendering should be responsive and works on the mobile device

## Trade-offs made (and why)

- used raw data point without any translation into JavaScript camel casing, i.e. `TOTAL_SPEND` vs `totalSpend`
  -- time constraint. can just use `.map()` and map the variable values from the raw fields to another JavaScript variable
- in 'Total Spending' section, only year 2015 was provided
  -- time constraint. the `year` endpoint can be extracted from the data source and be populated in a dropdown to be selected and update the visual dynamically
- in 'Spend by Country' section, only USA was provided
  -- time constraint. the 'location' endpoint can be extracted from the data source and be populated in a dropdown to be selected and update the visual dynamically
