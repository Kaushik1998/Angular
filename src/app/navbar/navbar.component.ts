import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  @Input("logo") logo: string = "Kaushik";
  @Input("id") id: string = "myNavbar";
  constructor() {}

  ngOnInit() {}
}
