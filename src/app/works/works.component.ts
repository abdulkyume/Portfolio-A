import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  myworks = [
    {
      id: 1,
      img: 'assets/img/khoshgolpo.jpeg',
      title: 'খোশগল্প - Khoshgolpo',
      desc: 'A Chat App',
      live: 'https://khoshgolpo.vercel.app/login',
      github: null,
    },
    {
      id: 2,
      img: 'assets/img/myeditor.png',
      title: 'Rich Text Editor',
      desc: 'Using Angular',
      live: 'https://angular-ivy-tjhejw.stackblitz.io',
      github: null,
    },
    {
      id: 3,
      img: 'assets/img/weather.png',
      title: 'Weather Search',
      desc: 'React, REST-API',
      live: 'https://react-weatherapp-three.vercel.app/',
      github: 'https://github.com/abdulkyume/react-weatherapp',
    },
    {
      id: 4,
      img: 'assets/img/ulence.png',
      title: 'ULENCE Templete',
      desc: 'HTML,CSS,JS and JQuery',
      live: 'https://abdulkyume.github.io/ulence/',
      github: null,
    },
    
    {
      id: 5,
      img: 'assets/img/applicantor.png',
      title: 'Applicantor',
      desc: 'HTML,CSS,JS',
      live: 'https://abdulkyume.github.io/Applicantor/',
      github: null,
    },
  ];
}
