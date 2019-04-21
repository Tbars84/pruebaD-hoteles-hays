import { Component, OnInit , Output , EventEmitter } from '@angular/core'
import { FormBuilder , FormGroup , Validators } from '@angular/forms'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  public hotelName: FormGroup;
  @Output() filteredByname = new EventEmitter<string>()
  // public hotelStars: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.hotelName = this.fb.group({
      name: ['' ,Validators.required ]
    })
  }

  submitHotelName(e){
    let name = this.hotelName.controls['name'].value
    this.filteredByname.emit(name)
  }

}
