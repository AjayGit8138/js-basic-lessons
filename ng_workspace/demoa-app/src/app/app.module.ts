import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppHeaderComponent} from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { BookListComponent } from './book-list/book-list.component';
import { StudyReactiveformComponent } from './study-reactiveform/study-reactiveform.component';
import { ReadJsonComponent } from './read-json/read-json.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { NewsComponent } from './news/news.component';
import {Routes,RouterModule} from '@angular/router'
import { MenuComponent } from './menu/menu.component';
import { BookformComponent } from './bookform/bookform.component';
import { BookcatalogComponent } from './bookcatalog/bookcatalog.component';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'books',component:BookcatalogComponent},
  {path:'addbook',component:BookformComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,AppHeaderComponent, BoxaComponent, CustomerFormComponent, EmployeeformComponent, BookListComponent, StudyReactiveformComponent, ReadJsonComponent, PriceDiscountPipe, BookComponent, TabComponent, NewsComponent, MenuComponent, BookformComponent,BookformComponent, BookcatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
