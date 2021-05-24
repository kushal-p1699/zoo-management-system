import { ZmsServiceService } from 'src/services/zms-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  profileForm: FormGroup;
  adminData: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: ZmsServiceService
  ) { 
    this.profileForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

    // read admin data from db
    this._service.readAdmindata()
      .subscribe((data: any) => {
        this.adminData = data[0];
        console.log(this.adminData)
    })
  }

  onUpdateProfile() {
    
    var enteredData = {
      "id": this.adminData.id,
      "name": (this.profileForm.value.name == null) ? this.adminData['name'] : this.profileForm.value.name,
      "email": (this.profileForm.value.email == null) ? this.adminData['email'] : this.profileForm.value.email,
      "phoneNumber": (this.profileForm.value.phoneNumber == null) ? this.adminData['phone_number'] : this.profileForm.value.phoneNumber,
      "password": (this.profileForm.value.password == null) ? this.adminData['password'] : this.profileForm.value.password,
    }
    console.log(enteredData)
    this._service.updateProfile(enteredData)
      .subscribe((data) => {
        alert("data saved successfully!")
        console.log(data);
      })
  
  }

}
