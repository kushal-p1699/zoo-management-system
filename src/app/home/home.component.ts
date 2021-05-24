import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmsServiceService } from 'src/services/zms-service.service';
import { Animal } from '../Model/animal';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  date = new Date();
  currentYear: any;
  contactForm: FormGroup;
  zero = 0;
  flag : string ;

  constructor(
    private _router: Router,
    private _service: ZmsServiceService,
    private _datePipe: DatePipe,
    private _formBuilder : FormBuilder
  ) { 
    this.currentYear = this._datePipe.transform(this.date, 'yyyy');

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]

    })
  }

  credentials = {adminName: '', password: ''};
  Animals: Animal[];
  flag_to_close_after_login = "";


  ngOnInit() {

    /* fetching aminal data */
    this._service.readAnimalData()
      .subscribe((animals: Animal[]) => {
        this.Animals = animals;
        console.log("fetched data : ", this.Animals);
      })
  }

  onLoginFormSubmit(form) {

    // console.log(form.value.password)

    this._service.onAdminLogin(form.value.adminName, form.value.password)
      .subscribe((data: any) => {
        console.log(data)
        if (data.length == 0) {
          alert("Login Failed!! , Use correct credential")
        } else {
          alert("Login Successfull !");
          this._router.navigate(['/admin']);
        }
      })
  }

  onSave() {
    console.log(this.contactForm.value);
    alert("Message sent successfully!")
    this._service.sendContactForm(this.contactForm.value)
      .subscribe(data => {
      console.log(data)
      })
    
    this.contactForm.reset();
  }
}
