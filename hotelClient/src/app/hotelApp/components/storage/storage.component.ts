import { Component, OnInit, Input } from '@angular/core';
import { hotelIn } from '../../../models/interfaces';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  @Input() storage: hotelIn[];
  constructor() { }

  ngOnInit() {
    console.log(this.storage);
  }

}
