import { Component, Input, OnInit } from '@angular/core';
import { Emaildetail, EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: Emaildetail;
  constructor(private emailservice: EmailService) { }

  ngOnInit(): void {
    this.email = {
      ...this.email,
      from: this.email?.to,
      to: this.email?.from

    }
  }
  onSubmitForm(email: Emaildetail) {
    this.emailservice.sendEmail(email).subscribe(
      ()=>{
        this.showModal=false;
      }
    )
  }
}
