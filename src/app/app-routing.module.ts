import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';


import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // {
  //   path: "",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:
  //         "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
  //     }
  //   ]
  // },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
