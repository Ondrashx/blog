import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-fin-calcs-page',
  templateUrl: './fin-calcs-page.component.html',
  styleUrls: ['./fin-calcs-page.component.scss']
})
export class FinCalcsPageComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> this.accordion.openAll(), 200);
  }

}
