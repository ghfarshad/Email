import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule}from '@angular/common/http';
import { SingOutComponent } from './sing-out/sing-out.component'

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SingOutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
