import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NumberApiCallService {
  getData(number: number) {
    return this.http.get(`http://numbersapi.com/${number}`);
  }
  constructor(private http: HttpClient) {}
}
