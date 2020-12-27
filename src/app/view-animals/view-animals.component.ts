import { Component, OnInit } from '@angular/core';
import { ZmsServiceService } from 'src/services/zms-service.service';
import { Animal } from '../Model/animal';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.css']
})
export class ViewAnimalsComponent implements OnInit {

  constructor(
    private _service : ZmsServiceService,
  ) { }

  Animals: Animal[];
  dataToUpdate: Animal;
  fileName: any;

  // instace to hold data to be updated
  animal_name: any;
  age: any;
  cage_number: any;
  animal_image_name: any;
  description: any;

  updatedAnimals: Animal = {
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

  ngOnInit() {
  /* fetching aminal data */
    this._service.readAnimalData()
      .subscribe((animals: Animal[]) => {
        this.Animals = animals;
        console.log("fetched data : ", this.Animals);
      })
    
    this.fileName = null;
  }

  openDialogForUpdate(animals: Animal) {
    this.dataToUpdate = animals;
    this.animal_name = this.dataToUpdate['animal_name'];
    this.age = this.dataToUpdate['age'];
    this.cage_number = this.dataToUpdate['cage_number'];
    this.animal_image_name = this.dataToUpdate['animal_image_name'];
    this.description = this.dataToUpdate['description'];

    console.log(this.dataToUpdate["animal_name"])
  }

  onSubmit(form) {

    alert("Data updated successfully ..!")

    var enteredData = {
      "id": this.dataToUpdate.id,
      "animalName": (form.value.animalName == null) ? this.animal_name : form.value.animalName,
      "age": (form.value.age == null) ? this.age : form.value.age,
      "cageNumber":  (form.value.cageNumber == null) ? this.cage_number : form.value.cageNumber,
      "animalImageName": (this.fileName == null) ? this.animal_image_name : "../../assets/images/" + this.fileName,
      "description": (form.value.description == null) ? this.description : form.value.description,
    }
    console.log("entered data : ", enteredData);

    this._service.updateAnimalData(enteredData)
      .subscribe((animal: Animal[]) => {
        console.log("updated data : ", animal);
      })
  }

  onDelete(id) {
    if (confirm("Are you sure to delete ? ")) {
      this._service.deleteAnimalData(id)
        .subscribe((animal: Animal) => {
          console.log("Deleted Data : ", animal);
      })
    }
    
  }

}
