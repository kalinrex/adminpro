import { GraficadonaComponent } from "./../components/graficadona/graficadona.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./page.routes";
import { FormsModule } from "@angular/forms";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { ChartsModule } from "ng2-charts";
@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficadonaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    GraficadonaComponent
  ],
  imports: [CommonModule, SharedModule, PAGES_ROUTES, FormsModule, ChartsModule]
})
export class PagesModule {}
