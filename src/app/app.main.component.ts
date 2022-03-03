import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-app.main',
  templateUrl: './app.main.component.html',
  styleUrls: ['./app.main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(public renderer: Renderer2,
    public app: AppComponent) { }

  ngOnInit(): void {
  }

}
