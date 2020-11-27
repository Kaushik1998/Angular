import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { IProduct } from "./../product-list/IProduct";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  products;
  product: IProduct;
  productId: number;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get("productId"));
      //console.log("productId", this.productId);
      if (isNaN(this.productId)) {
        console.log("sending back");
        this.router.navigate(["/landing"]);
      }
    });

    this.http
      .get("../../../assets/products.json")
      .subscribe((jsonFile: IProduct) => {
        this.products = jsonFile;
        this.product = this.products.find((product) => {
          return product.productId === this.productId;
        });
      });
  }
}
