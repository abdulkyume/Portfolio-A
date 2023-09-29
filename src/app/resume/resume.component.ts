import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-resume',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  myexps = [
    {
      id: 1,
      des_name: 'Web Application Developer',
      year: '2022-Current',
      wkplc_name: 'Quantum Foundation',
      details: 'Devloping Web Application using Angular Framework',
    },
  ];
}
