import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cat-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  host: {
    class: 'main-page'
  }
})
export class MainPageComponent  { };