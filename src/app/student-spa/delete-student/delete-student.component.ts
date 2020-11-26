import { IStudent } from "./../../student-api/istudent";
import { Component, OnInit } from "@angular/core";
import { StudentApiCallService } from "src/app/student-api/student-api-call.service";

@Component({
  selector: "app-delete-student",
  templateUrl: "./delete-student.component.html",
  styleUrls: ["./delete-student.component.css"],
})
export class DeleteStudentComponent implements OnInit {
  deleteStudentID: string;
  studentStatus: string;

  deleteStudent() {
    if (this.deleteStudent) {
      this.api.deleteStudent(this.deleteStudentID).subscribe((success) => {
        console.log(success);
        this.studentStatus = `Deleted Student (${this.deleteStudentID})`;
      });
    }
  }
  constructor(private api: StudentApiCallService) {}

  ngOnInit() {}
}
