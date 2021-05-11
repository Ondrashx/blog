import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-fin-calcs-page',
  templateUrl: './fin-calcs-page.component.html',
  styleUrls: ['./fin-calcs-page.component.scss']
})
export class FinCalcsPageComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  public showCharts = true;
  public showTables = true;
  public neededRent = 20000;
  public startNestEgg = 10000000;
  public expandFirst = false;
  public inflationValue = 2;
  public yearValue = 20;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=> this.expandFirst = true, 200);
  }

}
