import { IStudent } from "./../../student-api/istudent";
import { Component, OnInit } from "@angular/core";
import { StudentApiCallService } from "src/app/student-api/student-api-call.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit {
  addStudent: IStudent = {};
  studentStatus: string;
  // myForm: boolean = name;

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

    this.addStudent = this.registerForm.value;
    this.postStudent();
  }

  postStudent() {
    this.api.postStudent(this.addStudent).subscribe((success) => {
      this.studentStatus = `Student ID (${success}) added to API`;
    });
  }

  constructor(
    private api: StudentApiCallService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      rollNo: ["", Validators.required],
      age: ["", Validators.required],
      date: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      isMale: [""],
    });
  }
}
