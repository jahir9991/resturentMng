import { SharedModule } from './../../@shared/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './../product-list/product-list.component';
import { ProductCreateComponent } from './../product-create/product-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ProductRoutingModule],
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule {}
