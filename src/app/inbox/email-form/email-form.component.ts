import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Emaildetail } from 'src/app/_services/email.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email?:Emaildetail;
  form!: FormGroup;
  constructor() { }
  @Output() submitEmail= new EventEmitter();

  ngOnInit(): void {
        
    this.form=new FormGroup({ 
      from:new FormControl({value: this.email?.from , disabled:true}),
      to:new FormControl (this.email?.to,[Validators.required,Validators.email]),
      subject: new FormControl(this.email?.subject,[Validators.required]),
      text:new FormControl(this.email?.text,[Validators.required]),
      
    })
  }
  onsubmit(){
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitEmail.emit(this.form.getRawValue())
  }

}
