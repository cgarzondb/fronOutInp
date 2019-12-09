import { Component, OnInit, Input } from '@angular/core';
import { BackenService } from '../backen.service'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {

  constructor(public servBack: BackenService) { 
    this.servBack.peticion().subscribe(
      res=>{
        this.lblHijo = res[0].fruits;
        console.log(this.lblHijo);
      },
      err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {}

  @Input() public lblHijo: any;

}
