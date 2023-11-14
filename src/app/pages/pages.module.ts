import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    InsightsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ],
})
export class PagesModule { }
