import { IEntries } from "./ientries";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  readonly randid = "randid";

  putData(number: IEntries): void {
    localStorage.setItem(number.key, number.value);
  }

  getData(): IEntries[] {
    let numbers: IEntries[] = [];
    for (let [key, value] of Object.entries(localStorage)) {
      if (key != this.randid) {
        let numberEntry = <IEntries>{};
        numberEntry.key = key;
        numberEntry.value = value;
        numbers.push(numberEntry);
      }
    }
    return numbers;
  }

  clear() {
    localStorage.clear();
  }
  constructor() {}
}
