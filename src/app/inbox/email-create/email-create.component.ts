import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Emaildetail, EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Emaildetail | undefined;
  constructor(private authservise:AuthService,private emailservice:EmailService) {}

  ngOnInit(): void {
    this.email = {
      id: 0,
      subject: '',
      from : `${this.authservise.username}@angular-email.com`,
      to:'',
      html:'',
      text:'',
    }
  }
  onSubmitForm(email:Emaildetail){
    console.log(email);
    this.emailservice.sendEmail(email).subscribe(()=>
      {
        this.showModal=false
      }
    )
    
  }
}
