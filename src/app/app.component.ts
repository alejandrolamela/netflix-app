import { IFilms } from './models/ifilms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  public top5: IFilms[] = [
    
    {
      position:1,
      title:'La casa de papel',
      image:'https://media.revistagq.com/photos/5e941e89d39d4700080d7e2b/master/pass/la-casa-de-papel.jpg',
    },
    {
      position:2,
      title:'La Reina del Flow',
      image:'https://es.web.img3.acsta.net/pictures/19/03/18/11/36/4492917.jpg',
    },
    {
      position:3,
      title:'Titanes',
      image:'https://es.web.img3.acsta.net/pictures/18/09/28/09/34/1699413.jpg',
    },
    {
      position:4,
      title:'Los in Space',
      image:'https://m.media-amazon.com/images/I/81g701jPzkL._SL1500_.jpg',
    },
    {
      position:5,
      title:'Donde caben dos',
      image:'../../assets/Top10/5-dondecaben.webp',
    }
  ];
  
  public comedyFilms: IFilms[] = [
    
    {
      position:1,
      title:'Casi 300',
      image:'../../assets/Comedia/casi300.webp',
      section: 'COMEDIA'
    },
    {
      position:2,
      title:'Cazafantasmas',
      image:'../../assets/Comedia/cazafantasmas.webp',
    },
    {
      position:3,
      title:'Dictador',
      image:'../../assets/Comedia/dictador.webp',
    },
    {
      position:4,
      title:'Erase una vez en Hollywood',
      image:'../../assets/Comedia/erasehollywood.webp',
    },
    {
      position:5,
      title:'Family Guy',
      image:'../../assets/Comedia/family guy.webp',
    }
  ]

  public dramaFilms : IFilms[]= [
    
    {
      position:1,
      title:'1917',
      image:'../../assets/Drama/1917.webp',
      section: 'DRAMA'
    },
    {
      position:2,
      title:'La Llegada',
      image:'../../assets/Drama/arrival.webp',
    },
    {
      position:3,
      title:'La Club de la Lucha',
      image:'../../assets/Drama/clublucha.webp',
    },
    {
      position:4,
      title:'Corazones de Acero',
      image:'../../assets/Drama/corazones.webp',
    },
    {
      position:5,
      title:'Culpable',
      image:'../../assets/Drama/culpable.jpg',
    }
  ];

  public actionFilms : IFilms[]= [
    
    {
      position:1,
      title:'Ejercito de muertos',
      image:'../../assets/Accion/ejercitomuertos.jpg',
      section: 'ACTION'
    },
    {
      position:2,
      title:'El protector',
      image:'../../assets/Accion/elprotector.webp',
    },
    {
      position:3,
      title:'The equalizer2',
      image:'../../assets/Accion/equalizer2.webp',
    },
    {
      position:4,
      title:'Heat',
      image:'../../assets/Accion/heat.webp',
    },
    {
      position:5,
      title:'Jack Reacher',
      image:'../../assets/Accion/jackreacher.webp',
    }
  ]
}
