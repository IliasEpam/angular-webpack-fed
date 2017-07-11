import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { 
  AppComponent,
  CategoriesComponent,
  MainPageComponent,
  CategoryComponent,
  NavigatonCategories,
  NoContentComponent,
  HeaderComponent,
  ModalWindowComponent,
  MainBannerComponent,
  Partners,
  FooterComponent
} from './components';
import { CategoriesService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    MainPageComponent,
    CategoryComponent,
    NavigatonCategories,
    NoContentComponent,
    HeaderComponent,
    ModalWindowComponent,
    MainBannerComponent,
    Partners,
    FooterComponent
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { };
