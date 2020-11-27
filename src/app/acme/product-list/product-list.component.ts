import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  testProducts: IProduct;
  products: IProduct;
  showImages: boolean = true;
  imagesToggleButton: string = "Hide Images";

  toggleImages() {
    this.showImages = !this.showImages;
    this.imagesToggleButton = this.showImages ? "Hide Images" : "Show Images";
  }

  getNumber(id: string) {
    return parseInt(id);
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("../../../assets/products.json")
      .subscribe((jsonFile: IProduct) => {
        this.products = jsonFile;
      });
  }
}
