import { PopoverModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const _modules = [
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  PopoverModule
];

@NgModule({
  imports: [CommonModule, ..._modules, PopoverModule.forRoot()],
  declarations: [],
  exports: _modules
})
export class SharedModule {}
