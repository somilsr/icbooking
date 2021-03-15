import { Component, OnInit } from '@angular/core';
import { SelectRoomService } from '../services/select-room.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RoomNo } from '../models/room-no.model';

@Component({
  selector: 'select-room',
  templateUrl: './select-room-row.component.html',
  styleUrls: ['./select-room-row.component.css']
})
export class SelectRoomRowComponent implements OnInit {
  pnumber=1;

  place:Place[]=[];

  constructor(
    private RoomService:SelectRoomService,
    private router:Router
  ) {
    this.place[0]=new Place()
   }

  ngOnInit(): {
  }

  SearchBus(form: NgForm) {
    let leaving_form = form.value.leaving_form;
    let destination;
   
  
    this.place.filter(iteam=>{
      if(iteam.key==form.value.going_to){
        destination=iteam.value
      }
    })

    let date = form.value.depart_date;
    let route:Journey_Route = {
      leaving_form: leaving_form,
      going_to: destination,
      date:date
    }
    localStorage.setItem("route", JSON.stringify(route))
    let routeId = form.value.going_to;
    this.BusService.getRoueId(routeId);
    this.router.navigate(['search']);
  }

  leave(e){
 
    let leavingfrom=e.target.value;
    console.log(leavingfrom)
    if(leavingfrom=='dhaka'){
      this.place= [
        {key:'1109001', value:'3pm'} ,
        {key:'1109002', value:'6pm'} ,
        // {key:'1109004', value:'KuaKata'} ,
        // {key:'1109005', value:'Coxs Bazar'},
        // {key:'1109006', value:'Rajshahi'} ,
        {key:'1109002', value:'9pm'}, 
        {key:'1109003', value:'12pm'} ,
        {key:'1109004', value:'10pm'}
 
      ]
  }
  else if(leavingfrom=='3pm'){
    this.place= [
      {key:'2209002', value:'Chittagong'} ,
      {key:'2209001', value:'Dhaka'} ,
      {key:'2209003', value:'Rajshahi'} ,
     

    ]
  }
  else if(leavingfrom=='6pm'){
    this.place= [
      {key:'3309003', value:'Mymensingh'} ,
      {key:'3309001', value:'Dhaka'} ,
      {key:'3309002', value:'Sylet'} ,
   
    ]
  }

}


}
export class Place {
  key:string;
  value:string;

}
