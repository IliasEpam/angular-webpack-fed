import { Component, OnInit } from '@angular/core';
//import { CategoriesService } from '../../services';
//import { Observable } from 'rxjs';

@Component({
  selector: 'cat-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host: {
    class: 'categories'
  }
})
export class CategoriesComponent implements OnInit {
  public categories: any/*Observable<any>*/;

  constructor(/*private categoriesService: CategoriesService*/) {

   }

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
    ]
  }
};