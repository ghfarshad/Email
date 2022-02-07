import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.css']
})
export class SingOutComponent implements OnInit {

  constructor(private authservice : AuthService, private router :Router) { }

  ngOnInit(): void {
    this.authservice.signout().pipe(delay(3000)).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}
