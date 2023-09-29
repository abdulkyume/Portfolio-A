import { Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  imports: [CommonModule, RouterOutlet, NavigationComponent, ProfileComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (window.screen.width > 767 && window.screen.width < 1025) {
      this.needtoshow = false;
      this.needtoshow2 = true;
      document.getElementById('sidebar-ul')?.classList.add('sidebar-ul');
      document.getElementById('portfolio')?.classList.add('flex-wrap');
    } else if (window.screen.width > 1024) {
      this.needtoshow = true;
      this.needtoshow2 = true;
      document.getElementById('sidebar-ul')?.classList.remove('sidebar-ul');
    } else if (window.screen.width < 480) {
      this.needtoshow = false;
      this.needtoshow2 = true;
      document.getElementById('portfolio')?.classList.add('flex-wrap');
    }
  }
  needtoshow = false;
  needtoshow2 = false;
  onResize(event: any) {
    if (event.target.innerWidth > 767 && event.target.innerWidth < 1025) {
      this.needtoshow = false;
      this.needtoshow2 = true;
      document.getElementById('sidebar-ul')?.classList.add('sidebar-ul');
      document.getElementById('portfolio')?.classList.add('flex-wrap');
    } else if (event.target.innerWidth > 1024) {
      this.needtoshow = true;
      this.needtoshow2 = true;
      document.getElementById('sidebar-ul')?.classList.remove('sidebar-ul');
    } else if (event.target.innerWidth < 601) {
      this.needtoshow = false;
      this.needtoshow2 = true;
      document.getElementById('portfolio')?.classList.add('flex-wrap');
    }
  }
}
