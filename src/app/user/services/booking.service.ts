import { Injectable } from '@angular/core';

import { Journey } from "../models/journey.model";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import { User } from "../models/user.model";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class BookingService {

  journey_info= new BehaviorSubject('')
  cast= this.journey_info.asObservable();
  private USerId;
  private Root_Url = "https://bdbusticket.firebaseio.com/"
 

  constructor(
    private http: HttpClient,
        private UserService: UserService,
        private router: Router
  ) { }


  async seatBooking(jourey: Journey, user) {
    let busID = jourey.bus.$key;
    let booking = new Object()
    let key = new Date(jourey.journey_route.date).getTime();
    await this.createUserID(user).subscribe(
        res => {
            booking = {
                user_id: Object.values(res)[0],
                seats: jourey.seats
            }
            this.chekBookingDate_BusInfo(key, jourey, booking, busID)
        });

}
