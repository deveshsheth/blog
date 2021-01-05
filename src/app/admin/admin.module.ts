import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PagesComponent } from './pages/pages.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { ListcategoryComponent } from './categories/listcategory/listcategory.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditcategoryComponent } from './categories/editcategory/editcategory.component';
import { DataTablesModule } from 'angular-datatables';
import { AddblogsComponent } from './blogs/addblogs/addblogs.component';
import { ListblogsComponent } from './blogs/listblogs/listblogs.component';
import { EditblogsComponent } from './blogs/editblogs/editblogs.component';
@NgModule({
  declarations: [AdminComponent, DashboardComponent, BlogsComponent, PagesComponent, CategoriesComponent, AddcategoryComponent, ListcategoryComponent, EditcategoryComponent, AddblogsComponent, ListblogsComponent, EditblogsComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
