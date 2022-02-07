import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-inbox-home',
  templateUrl: './inbox-home.component.html',
  styleUrls: ['./inbox-home.component.css']
})
export class InboxHomeComponent implements OnInit {

  constructor(private emailservice : EmailService) { }

  ngOnInit(): void {
    this.emailservice.getEmails().subscribe((data)=>{
      console.log("inboxHome :",data)
    }
    )
  }

}
