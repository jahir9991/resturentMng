import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './../category-list/category-list.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
