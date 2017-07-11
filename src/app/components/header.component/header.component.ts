import { Component } from '@angular/core';

@Component({
  selector: 'cat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'navigation-top'
  }
})
export class HeaderComponent{
  public isModalWindowShown: boolean = false;
  onCloseModalWindows():void {
    this.isModalWindowShown = false;
  }
};