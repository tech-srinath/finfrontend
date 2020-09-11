import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  custFormGeneral: FormGroup;
  presentAddressForm: FormGroup;
  permanentAddressForm: FormGroup;
  contactForm: FormGroup;
  pmcForm: FormGroup;
  idProofForm: FormGroup;

  tomorrow = new Date(); 

  public Dob: Date;
  public age: number;
  public dob: Date;

  TABINDEX : number = 0;
  i : number = 0;

  constructor(private _formBuilder: FormBuilder) {
    this.custFormGeneral = this._formBuilder.group({
      branch: ['', Validators.required],
      custId: [''],
      adDate: ['', Validators.required],
      custName: ['', Validators.required],
      custDob: ['', Validators.required],
      custGender: ['', Validators.required],
      custReligion: ['', Validators.required],
      custCaste: ['', Validators.required],
      custRelation: ['', Validators.required],
      custSecName: ['', Validators.required],
      custPanNo: ['']
    })

    this.presentAddressForm = this._formBuilder.group({
      preHouseName: ['', Validators.required],
      prePlace: ['', Validators.required],
      preVillage: ['', Validators.required],
      prePost: ['', Validators.required],
      preDistrict: ['', Validators.required],
      preWard: ['', Validators.required],
      preHno: ['', Validators.required],
      preRoad: ['', Validators.required],
      preLandmark: ['', Validators.required]
    })

    this.permanentAddressForm = this._formBuilder.group({
      perHouseName: ['', Validators.required],
      perPlace: ['', Validators.required],
      perVillage: ['', Validators.required],
      perPost: ['', Validators.required],
      perDistrict: ['', Validators.required],
      perWard: ['', Validators.required],
      perHno: ['', Validators.required],
      perRoad: ['', Validators.required],
      perLandmark: ['', Validators.required]
    })

    this.contactForm = this._formBuilder.group({
      custPhoneNo: ['', Validators.required],
      custMobileNo1: ['', Validators.required],
      custMobileNo2: ['', Validators.required],
      custEmail: ['', Validators.required]
    })

    this.pmcForm = this._formBuilder.group({
      pmcType: ['', Validators.required],
      pmcName: ['', Validators.required]
    })

    this.idProofForm = this._formBuilder.group({
      idType: [''],
      idNo: [''],
      idRemarks: ['']
    })

    this.tomorrow.setDate(this.tomorrow.getDate());
   }

  ngOnInit(): void {
    this.TABINDEX = 0;
  }

  onSubmit(event){
    event.preventDefault();
    if(this.custFormGeneral.invalid){
      alert("Enter Details");
    }
    else if(this.presentAddressForm.invalid){
      alert("Enter Details");
    }
    else if(this.permanentAddressForm.invalid){
      alert("Enter Details");
    }
    else if(this.contactForm.invalid){
      alert("Enter Details");
    }
    else if(this.pmcForm.invalid){
      alert("Enter Details");
    }
    else{
      // save
    }
  }

  calculateAge(){
    if (this.Dob) {
      var timeDiff = Math.abs(Date.now() - new Date(this.Dob).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

  tabChange(index: number){
		if(index === 0){
			// alert("general");
    }
    else if(index === 1){
      // alert("present address");
    }
    else if(index === 2){
      // alert("permanent address");
    }
    else if(index === 3){
      // alert("contact");
    }
    else if(index === 4){
      // alert("panchayath");
    }
    else if(index === 5){
      // alert("id");
    }
  }
  
  nextTab(){
    if(this.TABINDEX < 6){
      ++this.TABINDEX;
    }
  }

  prevTab(){
    if(this.TABINDEX > 0){
      --this.TABINDEX;
    }
  }

  addToTable(){

    var table = document.getElementById("table_id_proof") as HTMLTableElement;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.style.border = "1px solid #dddddd";
    cell1.style.textAlign = "left";
    cell1.style.padding = "8px";
    cell2.style.border = "1px solid #dddddd";
    cell2.style.textAlign = "left";
    cell2.style.padding = "8px";
    cell3.style.border = "1px solid #dddddd";
    cell3.style.textAlign = "left";
    cell3.style.padding = "8px";
    cell4.style.border = "1px solid #dddddd";
    cell4.style.textAlign = "left";
    cell4.style.padding = "8px";
    cell1.innerHTML = this.idProofForm.controls.idType.value;
    cell2.innerHTML = this.idProofForm.controls.idNo.value;
    cell3.innerHTML = this.idProofForm.controls.idRemarks.value;
    cell4.innerHTML = "image";
    this.i = this.i+1;
    (<MatInput><any>document.getElementById("id_no")).value="";
    (<MatInput><any>document.getElementById("id_remarks")).value="";
    (<HTMLOptionElement><any>document.getElementById("id_type")).value="";
  }

}
