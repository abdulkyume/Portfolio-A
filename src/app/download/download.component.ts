import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gettemplate(){
    window.location.href = 'https://flowcv.com/invite/dgqdgkcu7n'
  }
  downloadcv(){
    window.location.href = 'assets/pdf/Abdul_Kyume.pdf'
  }

}
