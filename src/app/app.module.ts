import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { CmspageModule } from './cmspage/cmspage.module';
import {HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { LogModule } from './log/log.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DataTablesModule } from 'angular-datatables';
import { IsfeaturedComponent } from './blogspot/isfeatured/isfeatured.component';
import { IsactiveComponent } from './blogspot/isactive/isactive.component';
import { BlogspotModule } from './blogspot/blogspot.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
   
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    IsfeaturedComponent,
    IsactiveComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    CmspageModule,
    AuthModule,
    AdminModule,
    BlogspotModule,
    LogModule,
    DataTablesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    SlideMenuModule,
    ConfirmDialogModule,
    
 
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
