import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Cars status App';
  data : any;


  columnDefs = [{ field: "Name" }, { field: "Address" }, {field: "Vehicle Id"},{ field: "RegNo" }, { field: "Status" }];


  constructor(private appService: AppService){}
  ngOnInit(): void {
    this.appService.getStatus().subscribe(res=>{
      this.data = res;
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

}
