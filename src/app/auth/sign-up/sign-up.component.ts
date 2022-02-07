import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { MatchPasswordService } from 'src/app/_validators/match-password.service';
import { UniqueUsernameService } from 'src/app/_validators/unique-username.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form= new FormGroup ({
    username : new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)],[this.uniqueusername.validate.bind(this.uniqueusername)]),
    password : new FormControl ('',[Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
    passwordConfirmation : new FormControl('',[Validators.required , Validators.minLength(4),  Validators.maxLength(25)]) 
  },{
    validators:[this.matchpassword.validate]
  })
  constructor(private matchpassword : MatchPasswordService, 
    private uniqueusername : UniqueUsernameService,
    private authservice : AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.authservice.signup(this.form.value).subscribe((response)=>{
      this.router.navigate(['/inbox'])
    },
    (error)=>{
      if(!error.status){
        this.form.setErrors({noConnection:true});
      }else{
        this.form.setErrors({unknownError:true});
      }
    }
    );
  }
  get f () {
    return this.form.controls; 
  }
  showErrorPasswordDontMatch(){
    return this.form.controls.password.dirty&&
    this.form.controls.password.touched&& 
    this.form.controls.passwordConfirmation.dirty&&
    this.form.controls.passwordConfirmation.touched;   
  }
}
