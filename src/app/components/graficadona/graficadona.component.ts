import { Component, OnInit, Input } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
@Component({
  selector: "app-graficadona",
  templateUrl: "./graficadona.component.html",
  styleUrls: ["./graficadona.component.css"]
})
export class GraficadonaComponent implements OnInit {
  @Input("ChartLabels") public doughnutChartLabels: Label[] = [];
  @Input("ChartData") public doughnutChartData: MultiDataSet = [];
  @Input("ChartType") public doughnutChartType: ChartType = "";
  constructor() {}

  ngOnInit() {}
}
