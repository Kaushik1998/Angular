import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AcmeModule } from "./acme/acme.module";
import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { SharedModule } from "./shared/shared.module";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, routingComponents, HomepageComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AcmeModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
