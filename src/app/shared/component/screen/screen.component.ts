import { Component, Input } from '@angular/core';
import { Screen } from '../../model/screen';

@Component({
  selector: 'screen-comp',
  templateUrl: './screen.component.html'
})
export class ScreenComponent {

  @Input() screen: Screen;

}
