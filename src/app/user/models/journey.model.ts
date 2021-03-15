import { Journey_Route } from "./route.model";
import { Room } from "./room.model";
import { RoomNo } from "./room-no.model";

export class Journey {
    bus:RoomNo;
    seats:Room[];
    fare:number;
    journey_route:Journey_Route
}

export interface seat {
    seat:string
}