import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';
import { Emaildetail, EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email:any ;
  constructor(private route : ActivatedRoute, private emailservise : EmailService) {
    this.route.data.subscribe((data)=>{this.email=data.email})
   }

  ngOnInit(): void {
    
  }

}
 