import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './_guard/access.guard';

const routes: Routes = [
 {path:'inbox',canLoad:[AccessGuard], loadChildren:()=> import('./inbox/inbox.module').then ((m)=>m.InboxModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
