import { Component, OnInit } from '@angular/core';
import { GetHotelDataSrv } from '../../../services/hotelServices';
import { hotelIn } from '../../../models/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  hotelData: hotelIn[];
  constructor(private _hotelSrv: GetHotelDataSrv) { }

  ngOnInit() {
    this._hotelSrv.getAllHotels()
    .then(data => {
      this.hotelData = data;
      console.log(this.hotelData);
      
    })
  }

}
