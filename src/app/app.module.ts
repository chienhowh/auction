import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './auction-manage/navbar/navbar.component';
import { FooterComponent } from './auction-manage/footer/footer.component';
import { CarouselComponent } from './auction-manage/carousel/carousel.component';
import { SearchComponent } from './auction-manage/search/search.component';
import { ProductComponent } from './auction-manage/product/product.component';
import { StarsComponent } from './auction-manage/product/stars/stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { ProdDetailComponent } from './auction-manage/prod-detail/prod-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    SearchComponent,
    ProductComponent,
    StarsComponent,
    HomepageComponent,
    ProdDetailComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ){

  }
}
