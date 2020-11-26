import { IStudent } from "./istudent";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentApiCallService {
  url: string =
    "https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/";

  async getStudents() {
    return this.http.get(this.url);
  }

  postStudent(student: IStudent): Observable<any> {
    console.log("Inside POST");

    let studentJSON: string = JSON.stringify(student);
    let httpHeaders = new HttpHeaders({
      "Content-type": "application/json; charset=utf-8",
    });

    return this.http.post<any>(this.url, studentJSON, { headers: httpHeaders });
  }

  putStudent(student: IStudent): Observable<any> {
    console.log("Inside PUT");

    let studentJSON: string = JSON.stringify(student);
    let httpHeaders = new HttpHeaders({
      "Content-type": "application/json; charset=utf-8",
    });

    return this.http.put<any>(`${this.url}${student.id}`, studentJSON, {
      headers: httpHeaders,
    });
  }

  deleteStudent(studentID: string) {
    return this.http.delete(`${this.url}${studentID}`);
  }

  constructor(private http: HttpClient) {}
}
