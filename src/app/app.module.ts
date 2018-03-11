import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'details', component: ProductListComponent },
      { path: 'details/:id', canActivate: [ProductGuardService], component: ProductDetailsComponent },
      { path: 'welcome', component: HomeComponent },
      { path: 'leave', component: EmployeesComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
