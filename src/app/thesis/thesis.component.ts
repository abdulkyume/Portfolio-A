import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-thesis',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.css'],
})
export class ThesisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
