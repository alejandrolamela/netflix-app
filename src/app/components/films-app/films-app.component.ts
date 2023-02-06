import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films-app',
  templateUrl: './films-app.component.html',
  styleUrls: ['./films-app.component.scss']
})
export class FilmsAppComponent {

  @Input() public films!: any;

  @Input() public moviesFiltered!: any;

  

  ngOnInit() {
    this.moviesFiltered = [...this.films];
  }


  buscar(value: string): void {
    
        this.moviesFiltered = this.films.filter((film: any) => film.title.includes(value));
   
      }

}
