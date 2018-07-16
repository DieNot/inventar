import { Component, OnInit } from '@angular/core';
import { Computer } from '../shared/model/computer';

@Component({
  selector: 'computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {
  computerlist: Computer[];

  ngOnInit(): void {
    this.computerlist = [
      {
        id: 1,
        snr: '37485',
        name: 'Computer1',
        modelname: 'Asus G2',
        anlagennr: '1234 5678',
        owner: 'B07314',
        room: '03.345',
        screens: [
          {
          id: 1,
          snr: '476583',
          modelname: 'LG Flatron',
          anlagennr: '234 345'
        },
      ]
      },
      {
        id: 2,
        snr: '4964395',
        name: 'Computer2',
        modelname: 'Asus G3',
        anlagennr: '9012 5678',
        owner: 'B07314',
        room: '03.346',
        screens: undefined
      }
    ];
    console.log(this.computerlist[0]);
  }
}
