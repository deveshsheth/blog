import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogspotRoutingModule } from './blogspot-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ReadfeaturedComponent } from './readfeatured/readfeatured.component';


@NgModule({
  declarations: [ReadmoreComponent, ReadfeaturedComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BlogspotRoutingModule,
    
  ]
})
export class BlogspotModule { }
