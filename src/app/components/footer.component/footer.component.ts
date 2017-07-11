import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'cat-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host:{
    class: 'footer-main'
   }
})
export class FooterComponent implements OnInit {
  public categories: any;

  constructor() { }

  public ngOnInit(): void {
    this.categories = [
      {
        id: 1,
        name: "category1"
      },
      {
        id: 2,
        name: "category2"
      },
      {
        id: 3,
        name: "category3"
      },
      {
        id: 4,
        name: "category4"
      },
      {
        id: 5,
        name: "category5"
      },
      {
        id: 6,
        name: "category6"
      },
      {
        id: 7,
        name: "category7"
      },
      {
        id: 8,
        name: "category8"
      }
    ];
  }
};
