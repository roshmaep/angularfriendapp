import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  name=""
  readValues=()=>
  {
    let data:any={
    "title":this.name}
    console.log(data)
  }

}
