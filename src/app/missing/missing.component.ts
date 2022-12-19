import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.css']
})
export class MissingComponent implements OnInit {
  series = [2,3,10,15,26,35,50,63];


  ind:any;
  indexarr(index: any) {
    if (index) {
     this.ind= this.series[index];
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
