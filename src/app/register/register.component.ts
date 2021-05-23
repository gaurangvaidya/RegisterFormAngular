import { Component, OnInit } from '@angular/core';
import {InputData} from '../../Model/Inputdata'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  countryArray:string[] = [
    "India",
    "United Kingdom",
    "USA"
  ];

  countryCodeObj = {
    "India":"+91",
    "United Kingdom":"+44",
    "USA":"+1"
  };

  data:InputData = new InputData();
  validData:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f,firstname,lastname,password,emailid,countrySelected,countryCode,phoneNo)
  {

    this.data.firstname=firstname.value;
    this.data.lastname=lastname.value;
    this.data.password=password.value;
    this.data.emailid=emailid.value;
    this.data.country=countrySelected.value;
    this.data.countryCode=countryCode.value;
    this.data.phoneNo=phoneNo.value;
    console.log(this.data);
    this.validData=true;
    
  }

}
