import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
