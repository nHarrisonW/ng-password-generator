import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css'],
})
export class NewpasswordComponent {
  showToast=false;
  toastMessage='';
  alert = ' ';
  length = 8;
  include_letters = true;
  include_numbers = false;
  include_symbols = true;
  password = '';

  showCopyToast() {
    console.log('showToast!');
    this.showToast = true;
    this.toastMessage = 'Your new password has been copied';

    // Hide the toast after 3 seconds (adjust duration as needed)
    setTimeout(() => {
      this.showToast = false;
      this.toastMessage = '';
      console.log('Cleared');
    }, 3000);
  }

  ngOnInit() {
    this.generate_password();
  }

  copy_me() {
    const textField = document.createElement('textarea');
    textField.innerText = this.password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.showCopyToast();
  }

  onchange_use_numbers() {
    this.include_numbers = !this.include_numbers;
  }
  onchange_use_letters() {
    this.include_letters = !this.include_letters;
  }
  onchange_use_symbols() {
    this.include_symbols = !this.include_symbols;
  }
  onchange_length(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      if (parsedValue>28) {
        this.alert='OUCH! IT HURTS WHEN YOU BREAK ME!'
      }else if (parsedValue < 8) {
        this.alert = 'Password is weak!';
      } else {
        this.alert = '';
      }
      this.length = parsedValue;
    }
    this.generate_password();
  }

  generate_password() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()';

    let valid_chars = '';
    if (this.include_letters) {
      valid_chars += letters;
    }
    if (this.include_numbers) {
      valid_chars += numbers;
    }
    if (this.include_symbols) {
      valid_chars += symbols;
    }
    if(!this.include_letters && !this.include_numbers && !this.include_symbols){
      valid_chars+=letters;
      valid_chars+=numbers;
      valid_chars+=symbols;
      
    }

    let generated_password = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * valid_chars.length);
      generated_password += valid_chars[index];

      this.password = generated_password;
    }
  }
}
