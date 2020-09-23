import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
const index: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/mainadmin/mainadmin.module').then((m) => m.MainadminModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(index),
    RouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
