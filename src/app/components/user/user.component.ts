import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent implements OnInit {

  public title: string = 'User Component';
  public CalcTittle: string = 'Calc Component';
  public isAdmin: boolean = false;
  public isAlertOpen: boolean = false;
  public alertButtons: string[] = ['yes', 'no'];
  public alertMessage: string = '';
  public amount: number = 123.32;
  public todayIs: Date = new Date();

  constructor() { }

  ngOnInit() { }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  handleEvent(event: string) {
    this.alertMessage = event;
    this.isAlertOpen = !this.isAlertOpen;
  }

}