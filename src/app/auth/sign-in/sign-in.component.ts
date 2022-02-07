import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)])
  })
  constructor(private authService: AuthService, private router : Router) { }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.signin(this.form.value).subscribe(
      (res) => {
        this.router.navigate(['/inbox'])
      },
      (error: any) => {
        if (!error.status) { this.form.setErrors({ noConnection:true});
        return;
       }
       if(error.error.username || error.error.password){
         this.form.setErrors({credential:true});
       }  
      }
    )
  }
  ngOnInit(): void {}

  get f(){
   return this.form.controls;
  }

  showErrorPasswordDontMatch() {
    return this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.username.dirty &&
      this.form.controls.username.touched;
  }

}
