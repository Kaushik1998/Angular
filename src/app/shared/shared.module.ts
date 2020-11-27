import { PageNotFoundComponent } from "./../page-not-found/page-not-found.component";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NavbarComponent } from "./../navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, AngularFontAwesomeModule],
  exports: [NavbarComponent, PageNotFoundComponent],
})
export class SharedModule {}
export const sharedComponents = [NavbarComponent, PageNotFoundComponent];
