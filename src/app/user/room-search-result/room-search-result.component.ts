import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';

import { SelectRoomService } from '../services/select-room.service';
import { Subscription } from 'rxjs';
import { Room } from '../models/room.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';


@Component({
  selector: 'room-search-result',
  templateUrl: './room-search-result.component.html',
  styleUrls: ['./room-search-result.component.css']
})
export class RoomSearchResultComponent implements OnInit,OnDestroy {

  constructor(private BusService:SelectBusService,
    private modalService: BsModalService,
    private router:Router) { }

  ngOnInit() {
    this.route=JSON.parse(localStorage.getItem("route"));
    if(!this.route) {
      this.router.navigate([''])
    }
   this.subscription= this.BusService.castId.subscribe(
      res=>this.getAllBus(res)
    )
  }

  getAllBus(res){
    let bus=new Object();
    this.BusService.getBus(res)
    .subscribe(
      res=>{
        for(let key in res){
          bus=res[key];
          bus['$key']=key;
         
 
       this.buses.push(bus as Bus);
   

        }
      }
    )

  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}

openModal(template: TemplateRef<any>,bus) {
  this.modalRef = this.modalService.show(template);
  // let journey={
  //   route:this.route,
  //   bus_info:bus,
  //   seats:
  // }
  
}
closeModal (){
  this.modalRef.hide();
}

}
