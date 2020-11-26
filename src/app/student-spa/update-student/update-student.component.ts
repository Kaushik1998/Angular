import { IStudent } from "./../../student-api/istudent";
import { Component, OnInit } from "@angular/core";
import { StudentApiCallService } from "src/app/student-api/student-api-call.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-update-student",
  templateUrl: "./update-student.component.html",
  styleUrls: ["./update-student.component.css"],
})
export class UpdateStudentComponent implements OnInit {
  readonly STUDENT_ID_LENGTH: number = 36;
  updateStudent: IStudent = {};
  studentStatus: string;

  registerForm: FormGroup;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.updateStudent = this.registerForm.value;
    this.putStudent();
  }
  putStudent() {
    if (this.updateStudent) {
      this.api.putStudent(this.updateStudent).subscribe((success) => {
        this.studentStatus = `Updated Student (${this.updateStudent.id}).`;
      });
    }
  }
  constructor(
    private api: StudentApiCallService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [
        "",
        [Validators.required, Validators.minLength(this.STUDENT_ID_LENGTH)],
      ],
      name: ["", Validators.required],
      rollNo: ["", Validators.required],
      age: ["", Validators.required],
      date: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      isMale: [""],
    });
  }
}
