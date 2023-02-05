import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroine-app',
  templateUrl: './heroine-app.component.html',
  styleUrls: ['./heroine-app.component.scss']
})
export class HeroineAppComponent {

 @Input() public top5!: any;

}
