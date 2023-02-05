import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films-app',
  templateUrl: './films-app.component.html',
  styleUrls: ['./films-app.component.scss']
})
export class FilmsAppComponent {

  @Input() public films!: any;
 

}
