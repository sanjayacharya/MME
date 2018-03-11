import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public pageTitle = 'Welcome';
  constructor() { }

  ngOnInit() {
  }

}
