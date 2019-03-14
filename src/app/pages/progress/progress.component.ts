import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  public porcentaje = 50;
  public porcentaje2 = 30;

  constructor() {}

  ngOnInit() {}
}
