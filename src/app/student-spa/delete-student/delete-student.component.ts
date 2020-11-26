import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StudentApiCallService } from "src/app/student-api/student-api-call.service";

@Component({
  selector: "app-delete-student",
  templateUrl: "./delete-student.component.html",
  styleUrls: ["./delete-student.component.css"],
})
export class DeleteStudentComponent implements OnInit {
  readonly STUDENT_ID_LENGTH: number = 36;
  deleteStudentID: string;
  studentStatus: string;
  deleteForm: FormGroup;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.deleteForm.invalid) {
      return;
    }

    this.deleteStudentID = this.deleteForm.value;
    this.deleteStudent();
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.deleteForm.controls;
  }
  deleteStudent() {
    if (this.deleteStudent) {
      this.api.deleteStudent(this.deleteStudentID).subscribe((success) => {
        console.log(success);
        this.studentStatus = `Deleted Student (${this.deleteStudentID})`;
      });
    }
  }
  constructor(
    private api: StudentApiCallService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      delete: [
        "",
        [Validators.required, Validators.minLength(this.STUDENT_ID_LENGTH)],
      ],
    });
  }
}
