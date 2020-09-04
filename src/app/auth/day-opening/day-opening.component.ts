import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-day-opening',
  templateUrl: './day-opening.component.html',
  styleUrls: ['./day-opening.component.scss']
})

export class DayOpeningComponent implements OnInit {

  tomorrow = new Date(); 

  dayOpenForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.tomorrow.setDate(this.tomorrow.getDate());

    this.dayOpenForm = this._formBuilder.group({
      openDate: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
