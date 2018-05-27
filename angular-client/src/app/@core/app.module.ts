import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from '../@services/product.service';
import { ReactiveFormsModule } from '@angular/forms';

import { PopoverModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
