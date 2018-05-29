import { Component, OnInit } from '@angular/core';
import { Product } from '../../../@models/Product';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../../@services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: number;
  productData: Product;
  formdata: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      cost: new FormControl(),
      rating: new FormControl(),
      category_id: new FormControl(),
      subCategory_id: new FormControl(),
      group_id: new FormControl()
    });

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getData();
    });
  }

  onClickSubmit(data) {
    this.productService.update(this.id, data).subscribe(result => {
      this.router.navigate(['/dashboard/product/detail', this.id]);
    });
  }

  getData() {
    this.productService.getById(this.id).subscribe(result => {
      this.productData = result.data;

      this.formdata.controls['name'].setValue(this.productData.name);
      this.formdata.controls['price'].setValue(this.productData.price);
      this.formdata.controls['cost'].setValue(this.productData.cost);
      this.formdata.controls['rating'].setValue(this.productData.rating);
      this.formdata.controls['category_id'].setValue(
        this.productData.category_id
      );
      this.formdata.controls['subCategory_id'].setValue(
        this.productData.subCategory_id
      );
      this.formdata.controls['group_id'].setValue(this.productData.group_id);
    });
  }
}
