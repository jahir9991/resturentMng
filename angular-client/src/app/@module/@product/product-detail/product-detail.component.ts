import { Component, OnInit } from '@angular/core';
import { Product } from '../../../@models/Product';
import { ProductService } from '../../../@services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  productData: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getData();
    });
  }

  getData() {
    this.productService.getById(this.id).subscribe(result => {
      this.productData = result.data;
    });
  }
}
