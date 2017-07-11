import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { CategoriesService } from '../../services';

@Component({
  selector: 'cat-navigation-categories',
  templateUrl: './navigation-categories.component.html',
  styleUrls: ['./navigation-categories.component.scss']
})
export class NavigatonCategories implements OnInit {
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