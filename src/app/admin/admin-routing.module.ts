import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages/pages.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { ListcategoryComponent } from './categories/listcategory/listcategory.component';
import { EditcategoryComponent } from './categories/editcategory/editcategory.component';
import { AddblogsComponent } from './blogs/addblogs/addblogs.component';
import { ListblogsComponent } from './blogs/listblogs/listblogs.component';
import { EditblogsComponent } from './blogs/editblogs/editblogs.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent,children:[
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"blogs",component:BlogsComponent,children:[
      {path:"addblogs",component:AddblogsComponent},
      {path:"editblog/:id",component:AddblogsComponent},
      {path:"listblogs",component:ListblogsComponent}
    ],canActivate:[AuthGuard]},
    {path:"categories",component:CategoriesComponent,children:[
      {path:"addcategory",component:AddcategoryComponent},
      {path:"listcategory",component:ListcategoryComponent}
    ],canActivate:[AuthGuard]},
    {path:"pages",component:PagesComponent,canActivate:[AuthGuard]}
  ]},
  {path:"editcategory/:id",component:EditcategoryComponent},
  {path:"editblogs/:id",component:EditblogsComponent},
  {path:"admin/blogs/addblogs/editblog/:id",component:AddblogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
