import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StudentSpaComponent } from "./student-spa/student-spa.component";
import { LandingPageComponent } from "./homepage/landing-page/landing-page.component";
import { NumberApiComponent } from "./number-api/number-api.component";
import { StudentApiComponent } from "./student-api/student-api.component";
import { AddStudentComponent } from "./student-spa/add-student/add-student.component";
import { UpdateStudentComponent } from "./student-spa/update-student/update-student.component";
import { DeleteStudentComponent } from "./student-spa/delete-student/delete-student.component";
import { StudentSpaStudentsComponent } from "./student-spa/student-spa-students/student-spa-students.component";
import { StudentSpaLandingPageComponent } from "./student-spa/student-spa-landing-page/student-spa-landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    pathMatch: "full",
  },
  { path: "studentApi", component: StudentApiComponent },
  { path: "numbersApi", component: NumberApiComponent },
  {
    path: "studentSpa",
    component: StudentSpaComponent,
    children: [
      {
        path: "",
        component: StudentSpaLandingPageComponent,
        pathMatch: "full",
      },
      { path: "students", component: StudentSpaStudentsComponent },
      { path: "add", component: AddStudentComponent },
      { path: "update", component: UpdateStudentComponent },
      { path: "delete", component: DeleteStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  StudentSpaComponent,
  LandingPageComponent,
  NumberApiComponent,
  StudentApiComponent,
  AddStudentComponent,
  UpdateStudentComponent,
  DeleteStudentComponent,
  StudentSpaStudentsComponent,
  StudentSpaLandingPageComponent,
];
