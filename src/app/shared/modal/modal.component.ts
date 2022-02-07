import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Output() dismiss= new EventEmitter();
  @Input() showbtn=true;
  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy():void{
    this.el.nativeElement.remove();
  }
  onDismissClick():void{
    this.dismiss.emit();
  }

}
