import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { hotelIn , loadMoreStatus } from '../../../models/interfaces';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  @Input() private storage: hotelIn[];
  @Input() private loadMoreStatus: loadMoreStatus;
  @Output() loadMoreReq = new EventEmitter<loadMoreStatus>()
  constructor() { }

  ngOnInit() {}

  emitNewReq(){
    let newLoadMoreReq: loadMoreStatus = Object();
    // STARTING STATUS
    let{skip , limit , total, available} =  this.loadMoreStatus;
    // PROCESING REQ OBJECT
    newLoadMoreReq.skip = skip +(limit+1);
    newLoadMoreReq.limit = limit*2;
    newLoadMoreReq.total = total;
    newLoadMoreReq.available = total - (skip + limit) > 0;
    this.loadMoreReq.emit(newLoadMoreReq)
  }
}
