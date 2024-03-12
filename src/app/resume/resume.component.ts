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
      id: 3,
      des_name: 'Junior Software Engineer',
      year: 'Feb, 2024-Current',
      wkplc_name: 'WellDev Bangladsh Limited',
      details: '',
    },
    {
      id: 2,
      des_name: 'Junior Engineer',
      year: 'Jan, 2023 - Jan, 2024',
      wkplc_name: 'Trust Axiata Digital Limited',
      details:
        'Developed Admin Portal, Merchant Portal, Remote Portal Using Angular. - Developed Push Notification Scheduler Service Using Spring Boot 3. - Trust Axiata Pay developed using wordpress and elementor.',
    },
    {
      id: 1,
      des_name: 'Web Application Developer',
      year: 'Oct, 2022-Current',
      wkplc_name: 'Quantum Foundation',
      details: 'Devloping Web Application using Angular Framework',
    },
  ];
}
