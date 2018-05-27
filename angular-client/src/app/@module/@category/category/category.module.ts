import { SharedModule } from './../../@shared/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from '../category-list/category-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
  declarations: [CategoryListComponent]
})
export class CategoryModule {}
