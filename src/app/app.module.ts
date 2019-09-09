import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildrenComponent } from "./children/children.component";
import { ThreeChildrenComponent } from "./three-children/three-children.component";
import { ChildrenOneComponent } from "./three-children/children-one/children-one.component";
import { ChildrenTwoComponent } from "./three-children/children-two/children-two.component";
import { ChildrenThreeComponent } from "./three-children/children-three/children-three.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatButtonModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./data.service";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ParentComponent,
    ChildrenComponent,
    ThreeChildrenComponent,
    ChildrenOneComponent,
    ChildrenTwoComponent,
    ChildrenThreeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
