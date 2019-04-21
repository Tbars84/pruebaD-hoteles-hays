import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ApiCallIn } from '../models/interfaces'

@Injectable()

export class GetHotelDataSrv {

  // URL TO CALL THE API
  private API_URL = 'http://localhost:3030/api/hoteles';
  constructor(private _http: HttpClient) {}

  async getAllHotels(skip = 0 , limit = 10):Promise<ApiCallIn>{
    let response = await this._http.get<ApiCallIn>(`${this.API_URL}?skip=0&limit=${limit}`).toPromise()
    return response
  }

  // async getHotelByName(name):Promise<hotelIn[]>{
  //   const response = await this._http.get<hotelIn[]>('http://localhost:3030/api/hoteles/').toPromise()
  //   return response;
  // }

}