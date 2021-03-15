import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as EventEmitter from 'node:events';
import { Subscription } from 'rxjs';
import { Room } from '../models/room.model';
import { SelectRoomService } from '../services/select-room.service';
import { Journey } from '../models/journey.model';
import {RoomNo  } from '../models/room-no.model';


@Component({
  selector: 'select-room-no',
  templateUrl: './select-room-no.component.html',
  styleUrls: ['./select-room-no.component.css']
})
export class SelectRoomNoComponent implements OnInit ,OnDestroy{

  @Input('room') bus:Room;
  @Output('closeModal') closeModal = new EventEmitter()
showSeatList:Room[]=[];
total=0;
fillupSeat=[];
alert=false;

subscription:Subscription;

  constructor(
    private route:Router,
    private BusService:SelectRoomService
  ) { }

  ngOnInit(): void {
    this.getbookSeat();
  }

  Seat(e) {
    let seats=[];
    seats= this.showSeatList.map(iteam=>{
      return iteam.seatNo
    })
     let id = document.getElementById(e);
   
     if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
       if((this.showSeatList.length!=4)) {
         id.innerHTML = `   <img src="../assets/img/fseat.png" alt="">`
       
         let seat={
           seatNo:e,
           fare:this.bus.fare,
           seatClass:'economy'
         }
         this.totalFare(seat.fare);
         this.showList(seat);
       }
       else{
         this.alert=true;
       }
     }
 
   }
 
   showList(seat){
       this.showSeatList.push(seat)
   }
 
   totalFare(fare){
     this.total+=fare;
   }
 
   confirmJourney(){
     let route:Journey_Route= JSON.parse(localStorage.getItem("route"))
 
     let seats=[];
   seats= this.showSeatList.map(iteam=>{
     return iteam.seatNo
   });
 
   let journey :Journey={
     bus:this.bus,
     seats:seats,
     fare:Number(this.total),
     journey_route:route
   }
 
 localStorage.setItem("journey",JSON.stringify(journey))
 this.route.navigate(['user-form']);
 this.closeModal.emit();
   }
 
 
   getbookSeat(){
     
     let route:Journey_Route= JSON.parse(localStorage.getItem("route"))
     let busid=this.bus.$key;
     let key = String(new Date(route.date).getTime());
     console.log(busid,key)
     this.subscription=this.BusService.getFillupseat(key,busid)
     .subscribe(res=>{
       for(key in res){
         for(let i in res[key].seats){
           this.fillupSeat.push(res[key].seats[i])
           this.changeSeatColor(res[key].seats[i])
         }
       }
     })
   }
 
   changeSeatColor(seatNo){
     let id= document.getElementById(seatNo)
     id.innerHTML=`  <img src="../assets/img/bookseat.png">`
     id.removeEventListener("click",this.Seat);
     
   
   }
 
   ngOnDestroy(){
     this.subscription.unsubscribe();
   }



}
