import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  public user = new FormControl('');
  public password = new FormControl('');

  ngOnInit() {
    this.localStorageService.setItem('logedIn', 'false');
  }

  login() {
    console.log('User', this.user.value);
    console.log('Password', this.password.value);
    if (this.user.value === 'admin' && this.password.value === 'admin') {
      this.localStorageService.setItem('logedIn', 'false');
      this.router.navigate(['/home']);
    }
  }

}
