import { DashboardRouterModule } from './dashboard-router.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from './../../@layout/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../@shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, LayoutModule,DashboardRouterModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
