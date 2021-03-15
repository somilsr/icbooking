import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RoomSearchResultComponent } from './user/room-search-result/room-search-result.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { PrintComponent } from './user/print/print.component';
import { SelectRoomRowComponent } from './user/select-room-row/select-room-row.component';
import { SelectRoomNoComponent } from './user/select-room-no/select-room-no.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectRoomService } from './user/services/select-room.service';
import { BookingService } from './user/services/booking.service';
import { UserService } from './user/services/user.service';

import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {HttpClientModule} from '@angular/common/http';

const userRout:Routes=[
{path:'',component:SelectRoomNoComponent},
{path:'search',component:RoomSearchResultComponent},
{path:'user-form',component:UserFormComponent},
{path:'print',component:PrintComponent},



]



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoomSearchResultComponent,
    FooterComponent,
    HeaderComponent,
    PrintComponent,
    SelectRoomRowComponent,
    SelectRoomNoComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(userRout,{relativeLinkResolution:'legacy'}),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    SelectRoomService,
    BookingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
