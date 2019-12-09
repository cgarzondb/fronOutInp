import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.scss'],
})
export class PapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public LblPapa: string= "este el papa";  
  public varPapa:string= "";
  
  Evento(){
    console.log(this.varPapa);
  }

}
