import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LogModule } from '../log/log.module';
import { SignupComponent } from './signup/signup.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    LogModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MessageModule,
    MessagesModule
    
  ],
  providers: [MessageService],

})
export class AuthModule { }
