
import { Animal } from './../Model/animal';
import { ZmsServiceService } from './../../services/zms-service.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private _roter: Router,
    private _formBuilder: FormBuilder,
    private _service : ZmsServiceService,
  ) { }

  adminName: string;

  // imagesForm: FormGroup;
  // Animals: Animal[];
  // fileName: any;

  // addedAnimals: Animal = {
  //   id: null,
  //   animalName: null, 
  //   breed: null,
  //   cageNumber: null,
  //   imageFile: null,
  //   animalImageName : null
  // }

  ngOnInit() {
    
    this._service.readAdmindata()
      .subscribe(data => {
        this.adminName = data[0].name;
    })
    
  }

  onLogout() {
    if (window.confirm("Are you sure to logout ?")) {
      this._roter.navigate[('/admin/add-animals')]
    }
  }

  // onFileSelect(event) {
  //   const file = event.target.files[0];
  //   this.fileName = file.name;
  //   console.log("selected file name :", this.fileName)
  // }

  // onSubmit(form) {

  //   var enteredData = {
  //     "animalName": form.value.animalName,
  //     "breed": form.value.breed,
  //     "cageNumber": form.value.cageNumber,
  //     "animalImageName" : "../../assets/images/"+this.fileName
  //   }
  //   console.log("entered data : ", enteredData);

  //   this._service.addAnimals(enteredData)
  //     .subscribe((animal: Animal[]) => {
  //       console.log("animal added : ", animal);
  //     })
  // }

}
