import { Component, Input } from '@angular/core';
import { Computer } from '../../model/computer';

@Component({
  selector: 'computer-comp',
  templateUrl: './computer.component.html'
})
export class ComputerComponent {

    @Input() computer: Computer;

}
