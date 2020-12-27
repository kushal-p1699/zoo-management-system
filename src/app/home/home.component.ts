import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmsServiceService } from 'src/services/zms-service.service';
import { Animal } from '../Model/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  date = new Date();
  currentYear: any;

  constructor(
    private _router: Router,
    private _service: ZmsServiceService,
    private _datePipe: DatePipe
  ) { 
    this.currentYear = this._datePipe.transform(this.date, 'yyyy');
  }

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

  onLogin() {
    this.flag_to_close_after_login = "modal";
    this._router.navigate(['/admin']);
  }

}
