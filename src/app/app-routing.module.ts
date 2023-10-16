import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  {
    path:"",
    component:InsertComponent
  },
  {
    path:"reader",
    component:ReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
