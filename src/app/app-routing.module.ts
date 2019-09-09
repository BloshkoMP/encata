import { ChildrenComponent } from "./children/children.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ParentComponent } from "./parent/parent.component";
import { ThreeChildrenComponent } from "./three-children/three-children.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  {
    path: "parent",
    component: ParentComponent,
    children: [{ path: "children/:id", component: ChildrenComponent }]
  },
  { path: "table", loadChildren: "./table/table.module#TableModule" },
  { path: "parent-with-three-children", component: ThreeChildrenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
