import { Component, OnInit } from '@angular/core';
import { AddService } from './add.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private adSrv:AddService) { }

  ngOnInit(): void {
    console.log(" add data ")
    this.adSrv.addData('{"a": 4, "b": 5}').subscribe( data => {
      console.log(data)
     console.log(data)
    }, error => {
      console.log(error)
    });

  }

}
