import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailResolver } from '../_resolvers/email.resolver';
import { EmailShowComponent } from './email-show/email-show.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';

const routes: Routes = [
  {path:'',component:InboxHomeComponent,
    children:[
      {path:'', component:PlaceHolderComponent},
      {path:'not-found' , component : NotFoundComponent},
      {path:':id',component:EmailShowComponent, resolve:{email:EmailResolver}},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
