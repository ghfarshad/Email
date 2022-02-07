import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, skipWhile, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanLoad {
  constructor(private auth: AuthService) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.auth.signedin$.pipe(
      skipWhile((signedin) => signedin === null || signedin === false),
      take(1),
      map((signedin) => { return signedin })
    )
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | boolean {
  //   return this.auth.signedin$.pipe(
  //     skipWhile((signedin) => signedin === null || signedin === false),
  //     take(1),
  //     map((signedin) => { return signedin })
  //   );
  // }
}
