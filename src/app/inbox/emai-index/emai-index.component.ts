import { Component, OnInit } from '@angular/core';
import { Emaildetail, EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-emai-index',
  templateUrl: './emai-index.component.html',
  styleUrls: ['./emai-index.component.css']
})
export class EmaiIndexComponent implements OnInit {
  Emails:Emaildetail | undefined ;
  constructor(private emailservice : EmailService) { }

  ngOnInit(): void {  
    this.emailservice.getEmails().subscribe((data?:any)=>{
      this.Emails=data;
    })
  }

}
