import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-download',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  gettemplate() {
    window.location.href = 'https://flowcv.com/invite/dgqdgkcu7n';
  }
  downloadcv() {
    window.location.href = 'assets/pdf/Abdul_Kyume.pdf';
  }
}
