import { TableComponent } from "./table/table.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule, MatInputModule } from "@angular/material";

const routes: Routes = [{ path: "", component: TableComponent }];

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule, MatSortModule, MatInputModule, RouterModule.forChild(routes)]
})
export class TableModule {}
