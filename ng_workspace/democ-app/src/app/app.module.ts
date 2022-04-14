import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualComponent } from './visual/visual.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'about',component:AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    VisualComponent,
    HomeComponent,
    UsersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
