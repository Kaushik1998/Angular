import { IStudent } from "./../../student-api/istudent";
import { Component, OnInit } from "@angular/core";
import { StudentApiCallService } from "src/app/student-api/student-api-call.service";

@Component({
  selector: "app-student-spa-students",
  templateUrl: "./student-spa-students.component.html",
  styleUrls: ["./student-spa-students.component.css"],
})
export class StudentSpaStudentsComponent implements OnInit {
  students: IStudent[];
  setStudents() {
    console.log("Students Loaded");

    this.api.getStudents().then((observable) => {
      observable.subscribe((success: IStudent[]) => {
        this.students = success;
      });
    });
  }

  deleteStudent(deleteStudentID: string) {
    this.api.deleteStudent(deleteStudentID).subscribe((success) => {
      console.log(success);
      alert(`Deleted Student (${deleteStudentID})`);
    });
    this.setStudents();
  }

  constructor(private api: StudentApiCallService) {}

  ngOnInit() {
    this.setStudents();
  }
}
