import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsfeaturedComponent } from './isfeatured/isfeatured.component';
import { IsactiveComponent } from './isactive/isactive.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ReadfeaturedComponent } from './readfeatured/readfeatured.component';


const routes: Routes = [
  {path:"isfeatured",component:IsfeaturedComponent},
  {path:"isactive",component:IsactiveComponent},
  {path:"readmore/:id",component:ReadmoreComponent},
  {path:"readfeatured/:id",component:ReadfeaturedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogspotRoutingModule { }
