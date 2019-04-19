import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { hotelIn } from '../models/interfaces';

@Injectable()

export class GetHotelDataSrv {

  constructor(private _http: HttpClient) {}

  async getAllHotels(): Promise<hotelIn[]>{
    const response = await this._http.get('http://localhost:3030/api/hoteles').toPromise()
    return response;
  }
}