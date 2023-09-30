import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.test();
  }
  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  proffesions = [
    'Software Engineer',
    'Front-end Engineer',
    'Back-end Engineer',
    'Freelancer',
  ];
  async test() {
    var eli = document.getElementById('df-msg');
    for (var i = 0; i < this.proffesions.length; i++) {
      var a = 0;
      var s = '';
      while (a < this.proffesions[i].length) {
        s = s + this.proffesions[i][a];
        eli!.innerHTML = s;
        await this.sleep(150);
        a++;
      }
      a = this.proffesions[i].length;
      while (a > -1) {
        s = s.substring(0, a);
        eli!.innerHTML = s;
        await this.sleep(150);
        a--;
      }
      if (i == this.proffesions.length - 1) {
        i = -1;
      }
    }
  }
}
