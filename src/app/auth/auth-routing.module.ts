import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingOutComponent } from './sing-out/sing-out.component';

const routes: Routes = [
  {path:'' , component : SignInComponent},
  {path: 'signout' , component: SingOutComponent},
  {path:'signup' , component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
