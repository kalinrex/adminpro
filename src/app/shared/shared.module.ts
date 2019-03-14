import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

@NgModule({
  declarations: [
    NopagefoundComponent,
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    NopagefoundComponent,
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
