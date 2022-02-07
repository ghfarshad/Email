import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emaildetail, EmailService } from '../_services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<Emaildetail> {

  constructor(private emailservice : EmailService,private router:Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Emaildetail{
    const id =route.params.id;
    return this.emailservice.getemail(id).pipe(
      catchError(
        (err)=>{
          this.router.navigateByUrl('/inbox/not-Found')
          return EMPTY;
        }
      )
    );

  }
}
