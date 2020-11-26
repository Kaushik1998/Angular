import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { ComponentExperimentComponent } from "./component-experiment/component-experiment.component";
import { HomepageComponent } from "./homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    ComponentExperimentComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
