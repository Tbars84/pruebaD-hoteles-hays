import { Component, OnInit } from '@angular/core';
import { GetHotelDataSrv } from '../../../services/hotelServices';
import { hotelIn , loadMoreStatus } from '../../../models/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public hotelData: hotelIn[];
  public loadMoreStatus: loadMoreStatus;
  constructor(private _hotelSrv: GetHotelDataSrv) { }

  ngOnInit() {
    // INITIAL CALL TO THE SERVICE
    this._hotelSrv.getAllHotels()
    .then(res => {
      this.hotelData = res.data;
      this.loadMoreStatus = res.loadMoreEv;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  // EVENT LOAD MORE CALL TO THE SERVICE
  loadMoreReq(ev){
    this._hotelSrv.getAllHotels(ev.skip , ev.limit )
    .then(res => {
      this.hotelData = res.data;
      this.loadMoreStatus = res.loadMoreEv;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  // FILTERED A SINGLE HOTEL BY NAME
  loadfilteredReq(name) {
    this._hotelSrv.getHotelByName(name)
    .then(res => {
      this.hotelData = [];
      this.hotelData = res;
    })
  }
}
