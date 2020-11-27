import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";
import { AcmeLandingPageComponent } from "./acme-homepage/acme-landing-page/acme-landing-page.component";
import { AcmeHomepageComponent } from "./acme-homepage/acme-homepage.component";
import { ProductComponent } from "./product/product.component";
import { SharedModule } from "../shared/shared.module";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: AcmeHomepageComponent },
  { path: "landing", component: AcmeLandingPageComponent },
  { path: "productList", component: ProductListComponent },
  {
    path: "product/:productId",
    component: ProductComponent,
    children: [{ path: "productList", redirectTo: "/productList" }],
  },
  { path: "", component: AcmeLandingPageComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcmeRoutingModule {}

export const acmeRoutingComponents = [
  ProductListComponent,
  AcmeLandingPageComponent,
  AcmeHomepageComponent,
  ProductComponent,
];

export const acmeRoutes = routes;
