import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.test();
  }
  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  proffesions = [
    'Front-end Developer',
    'Back-end Developer',
    'Programmer',
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
