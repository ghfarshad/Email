import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


export interface signupcredetials {
  username: string;
  password: string;
  passwordConfirmation: string
}
export interface signupResponse {
  username: string;
}
export interface loginCredentials {
  username : string;
  password:string;
}
export interface loginResponse {
  username: String;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'https://api.angular-email.com';
  public signedin$ = new BehaviorSubject<boolean>(false);
  username :string='';
  
  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', { username: username })
  }
  signup(values: signupcredetials) {
    return this.http.post<signupResponse>(this.baseUrl + '/auth/signup/', values)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      )
  }

  checkAuth() {
    return this.http.get(`${this.baseUrl}/auth/signedin`,).pipe(tap((response: any) => {
      this.signedin$.next(response.authenticated);
      this.username=response?.username;
    })
    );
  }
  signout() {
    return this.http.post(`${this.baseUrl}/auth/signout/`, {}).pipe(
      tap(() => { this.signedin$.next(false) })
    )
  }
  signin(logincredentials : loginCredentials){
     return this.http.post<loginResponse>(`${this.baseUrl}/auth/signin/`,logincredentials).pipe(tap(()=>{
      this.signedin$.next(true);
    }))
  }

}
