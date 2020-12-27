import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmsServiceService } from 'src/services/zms-service.service';
import { Animal } from '../Model/animal';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css']
})
export class AddAnimalsComponent implements OnInit {

  constructor(
    private _roter: Router,
    private _service : ZmsServiceService,
  ) { }
  
  Animals: Animal[];
  fileName: any;

  addedAnimals: Animal = {
    id: null,
    animalName: null, 
    age: null,
    cageNumber: null,
    animalImageName: null,
    description: null,
  }

  onFileSelect(event) {
    const file = event.target.files[0];
    this.fileName = file.name;
    console.log("selected file name :", this.fileName)
  }

  onSubmit(form) {

    var enteredData = {
      "animalName": form.value.animalName,
      "age": form.value.age,
      "cageNumber": form.value.cageNumber,
      "animalImageName": "../../assets/images/" + this.fileName,
      "description": form.value.description
    }
    console.log("entered data : ", enteredData);

    this._service.addAnimals(enteredData)
      .subscribe((animal: Animal[]) => {
        console.log("animal added : ", animal);
      })
    
    alert("data updated successfully !!")
    // reset from
    form.resetForm();
  }

  ngOnInit() {
  }

}
