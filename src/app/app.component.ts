import { Component, OnInit } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Email';
  constructor(private authService : AuthService) {
    this.authService.checkAuth().subscribe((response)=>{
      console.log("app.componrnt :",response)
    })
  }

  ngOnInit(): void {
    // bekhatere componente signout comentesh kardim ke khosdesh automatic sign out nakone 
    // *nokte baraye sign out kardane automatic mishe az in ravesh ham raft
  
    // setTimeout(() => {
    //   this.authService.signout().subscribe((Response)=>{console.log(Response)})
    // }, 5000);
  }
}
