import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsightsComponent } from './insights/insights.component';
import { GptComponent } from './gpt/gpt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gpt', component: GptComponent },
  { path: 'about', component: AboutComponent },
  { path: 'references', component: InsightsComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
