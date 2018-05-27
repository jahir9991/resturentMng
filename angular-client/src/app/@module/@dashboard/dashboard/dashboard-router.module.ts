import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: '../../@product/product/product.module#ProductModule'
      },
      {
        path: 'product',
        loadChildren: '../../@product/product/product.module#ProductModule'
      },
      {
        path: 'category',
        loadChildren: '../../@category/category/category.module#CategoryModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
