
import { RoomNo } from "./room-no.model";
import { Room } from "./room.model";

export class Booking {
    $key:string
    location:string;
    room:Room;
    seat_book_User:SeatBook;
}

export interface SeatBook {
    $key:string;
    user_id:string;
    seats:RoomNo[];
}