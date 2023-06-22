import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntriesTableComponent } from './components/entries-table/entries-table.component';
const routes: Routes = [
  {
    path: "",
    component: EntriesTableComponent
  }
]


@NgModule({
  declarations: [EntriesTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EntriesTableComponent
  ],
  exports:[RouterModule]
})
export class EntitiesTableRoutingModule { }
