import { NumberApiCallService } from './number-api-call.service';
import { LocalStorageService } from "./local-storage.service";

import { Component, OnInit } from "@angular/core";
import { IEntries } from "./ientries";
import * as moment from "moment";

@Component({
  selector: "number-api",
  templateUrl: "./number-api.component.html",
  styleUrls: ["./number-api.component.css"],
})
export class NumberApiComponent implements OnInit {
  response: string;
  number: number;
  numberEntries: IEntries[];

  apiCall() {
    if (this.number) {
      this.service.getData(this.number).subscribe(
        (result) => {
          // console.log("Ye sir function execute nai hora sir");
          console.log(result);
        },
        (error) => {
          // console.log("Error Ara he Sir");
          this.response = error.error.text;
          console.log(this.response);
          let newEntry = <IEntries>{};
          newEntry.key = new Date().toString();
          newEntry.value = this.response;
          if (newEntry) {
            this.myStorage.putData(newEntry);
          }
          this.numberEntries = this.myStorage.getData();
          console.log(this.numberEntries);
        }
      );
    }
  }

  clear() {
    this.myStorage.clear();
    this.numberEntries = this.myStorage.getData();
  }

  getMoment(date: string) {
    return moment(date).fromNow();
  }

  constructor(
    private service: NumberApiCallService,
    private myStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.numberEntries = this.myStorage.getData();
  }
}
