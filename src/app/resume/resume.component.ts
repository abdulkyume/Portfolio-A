import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myexps = [{
    id:1,
    des_name:'Web Application Developer',
    year:'2022-Current',
    wkplc_name: 'Quantum Foundation',
    details:'Devloping Web Application using Angular Framework'
  }]
}
