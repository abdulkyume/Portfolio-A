import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import '../../assets/js/smtp'
declare let Email: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}
  formsenderdata!: FormGroup;
  createForm() {
    this.formsenderdata = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      textdet: ['', Validators.required],
    });
  }
  senddata() {
    if (this.formsenderdata.valid) {
      console.log(this.formsenderdata.value);
      document.getElementById('warnmsg')?.classList.add('d-none');
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'abbirtak3@gmail.com',
        Password: 'C7021CCA133A88E5D7F16959B2098D6B8B15',
        To: 'abbirtak3@gmail.com',
        From: 'abbirtak3@gmail.com',
        Subject: 'mail from portfolio website',
        Body: `
        Email: ${this.formsenderdata.value.email} <br>
        Name: ${this.formsenderdata.value.name} <br>
        Message: ${this.formsenderdata.value.textdet} <br>
        `,
      }).then((message: any) => {
        console.log(message);
        this.formsenderdata.reset(this.formsenderdata.value);
      });
    } else {
      document.getElementById('warnmsg')?.classList.remove('d-none');
    }
  }
}
