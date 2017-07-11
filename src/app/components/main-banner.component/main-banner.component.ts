import { Component } from '@angular/core';

@Component({
  selector: 'cat-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  host: {
    class: 'main-banner'
  }
})
export class MainBannerComponent {};