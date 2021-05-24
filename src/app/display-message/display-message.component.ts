import { ZmsServiceService } from 'src/services/zms-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit {

  constructor(
    private _service: ZmsServiceService
  ) { }

  messageData: any;

  ngOnInit() {

    this._service.readMessages()
      .subscribe(data => {
        this.messageData = data;
      // console.log("message : ", data)
    })

  }

}
