import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export interface Emaildetail {
  id? : number;
  text : string;
  html : string;
  from : string;
  to : string;
  subject : string;
};

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private rooturl = 'https://api.angular-email.com';
  private emails = [
    {
      id: 1, subject: 'test', from: 'test@gmail.com', to: "farshad@gmail.com", html: "<h1>Lorem20 farshad ghorbani can i can i can ican ican ican ican </h1>",
      Text: "text"
    },
    {
      id: 2, subject: 'test 1', from: 'test1@gmai.com', to: "farshad@gmail.com", html: "<h1>Lorem20 farshad ghorbani can i can i can ican ican ican ican </h1>",
      Text: "text"
    },
    {
      id: 3, subject: 'test 2', from: 'test2@gmai.com', to: "farshad@gmail.com", html: "<h1>Lorem20 farshad ghorbani can i can i can ican ican ican ican </h1>",
      Text: "text"
    },
    {
      id: 4, subject: 'test 3', from: 'test3@gmai.com', to: "farshad@gmail.com", html: "<h1>Lorem20 farshad ghorbani can i can i can ican ican ican ican </h1>",
      Text: "text"
    },
  ];
  constructor(private http: HttpClient) { }

  getEmails() {
    return of(this.emails)
    // return this.http.get<any>(`${this.rooturl}/emails`);
  }
  getemail(id: number) {
    const email = this.emails.find((e) => e.id == id)
    return of (email)
    // return this.http.get<Emaildetail>(`${this.rooturl}/emails/${id}`)
  }
  sendEmail(email:Emaildetail){
    return this.http.post(`${this.rooturl}/emails`,email)
  }
}
