import { Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.scss']
})
export class AppTopbarComponent {

  constructor(public app: AppComponent) { }

 
}
