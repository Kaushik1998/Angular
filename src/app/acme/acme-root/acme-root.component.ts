import { Component, OnInit } from "@angular/core";

@Component({
  selector: "acme-root",
  templateUrl: "./acme-root.component.html",
  styleUrls: ["./acme-root.component.css"],
})
export class AcmeRootComponent implements OnInit {
  readonly acmeHomeNavbarID = "acmeHomeNavbarID";
  readonly acmeHomeNavbarTitle = "Acme";
  constructor() {}

  ngOnInit() {}
}
