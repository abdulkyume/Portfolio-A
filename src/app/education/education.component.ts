import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-education',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myeducation = [
    {
      id: 1,
      name: 'BSc. in Computer Science & Engineering',
      year: '2018-2022',
      ins_name: 'East West University',
      address: 'Dhaka, Bangladesh',
      Grade: 3.49,
    },
    {
      id: 2,
      name: 'H. S. C. (Science)',
      year: '2017',
      ins_name: 'Dr. Mahbubur Rahman Mollah College',
      address: 'Dhaka, Bangladesh',
      Grade: 4.83,
    },
    {
      id: 3,
      name: 'S. S. C. (Science)',
      year: '2015',
      ins_name: 'A. K. High School',
      address: 'Dhaka, Bangladesh',
      Grade: 5.0,
    },
    {
      id: 3,
      name: 'S. S. C. (Science)',
      year: '2015',
      ins_name: 'A. K. High School',
      address: 'Dhaka, Bangladesh',
      Grade: 5.0,
    },
  ];
}
