import { HomepageComponent } from './homepage/homepage.component';
import { ProdDetailComponent } from './auction-manage/prod-detail/prod-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage/:id', component: ProdDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
