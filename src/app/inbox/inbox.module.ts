import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmaiIndexComponent } from './emai-index/emai-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailFormComponent } from './email-form/email-form.component';


@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmaiIndexComponent,
    EmailShowComponent,
    PlaceHolderComponent,
    NotFoundComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class InboxModule { }
