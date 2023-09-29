import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navigation',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // if (window.screen.width > 479 && window.screen.width < 769) {
    //   this.needtoshow = true;
    //   document.getElementById('sidebar-ul')?.classList.add('sidebar-ul');
    // } else if (window.screen.width < 480) {
    //   this.needtoshow = true;
    //   document.getElementById('sidebar-ul')?.classList.add('sidebar-ul');
    //   document.getElementById('sidebar')?.classList.add('overflows');
    // } else if (window.screen.width > 1024) {
    //   this.needtoshow = false;
    //   document.getElementById('sidebar-ul')?.classList.remove('sidebar-ul');
    // }
  }
  needtoshow = false;
  onResize(event: any) {
    if (event.target.innerWidth > 479 && event.target.innerWidth < 769) {
      this.needtoshow = true;
      document.getElementById('sidebar-ul')?.classList.add('sidebar-ul');
    } else if (event.target.innerWidth < 480) {
      this.needtoshow = true;
      document.getElementById('sidebar-ul')?.classList.add('sidebar-ul');
      document.getElementById('sidebar')?.classList.add('overflows');
    } else if (event.target.innerWidth > 1024) {
      this.needtoshow = false;
      document.getElementById('sidebar-ul')?.classList.remove('sidebar-ul');
    }
  }
}
