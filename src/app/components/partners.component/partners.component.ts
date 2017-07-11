import { Component } from '@angular/core';

@Component({
  selector: 'cat-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  host: {
    class: 'partners'
  }
})
export class Partners { 
  public wwfImg = '/img/partners/wwf.png';
  public greenPeaceImg = '/img/partners/green.png';
  public royalCaninImg = '/img/partners/royal.png';
};