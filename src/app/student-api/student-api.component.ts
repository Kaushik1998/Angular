import { IStudent } from "./istudent";
import { StudentApiCallService } from "./student-api-call.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "student-api",
  templateUrl: "./student-api.component.html",
  styleUrls: ["./student-api.component.css"],
})
export class StudentApiComponent implements OnInit {
  students: IStudent[];
  addStudent: IStudent = {};
  updateStudent: IStudent = {};
  deleteStudentID: string;

  async setStudents() {
    console.log("Students Loaded");

    await this.api.getStudents().then((observable) => {
      observable.subscribe((success: IStudent[]) => {
        this.students = success;
      });
    });
  }

  async postStudent() {
    if (this.addStudent) {
      this.api.postStudent(this.addStudent).subscribe((success) => {
        alert(success);
      });
      await this.setStudents();
    }
  }

  putStudent() {
    if (this.updateStudent) {
      this.api.putStudent(this.updateStudent).subscribe((success) => {
        console.log(success);
        alert("Updated Student : " + this.updateStudent.id);
      });
      this.setStudents();
    }
  }

  deleteStudent() {
    if (this.deleteStudent) {
      this.api.deleteStudent(this.deleteStudentID).subscribe((success) => {
        console.log(success);
        alert("Deleted Student : " + this.deleteStudentID);
      });
      this.setStudents();
    }
  }
  constructor(private api: StudentApiCallService) {}

  ngOnInit() {
    this.setStudents();
  }
}
