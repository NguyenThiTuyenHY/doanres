import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import { MainadminComponent } from './mainadmin.component';
import {ThongkeadminComponent} from './thongkeadmin/thongkeadmin.component';
const admin: Routes = [
  {
    path: '',
    component: MainadminComponent,
    children: [
      {
        path: '',
        component : ThongkeadminComponent
      }
    ]
  }
]


@NgModule({
  declarations: [ThongkeadminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(admin),
    RouterModule
  ]
})
export class MainadminModule { }
