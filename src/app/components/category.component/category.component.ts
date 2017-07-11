import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { CategoriesService } from '../../services';

@Component({
  selector: 'cat-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: {
    class: 'goods'
  }
})
export class CategoryComponent implements OnInit, OnDestroy {
  public products: any;
  public categoryId: number;
  public categoryName: string;
  public sub: any;
  public listView: boolean = false;

  constructor(private route: ActivatedRoute, /*private categoriesService: CategoriesService*/) {
   }
  public switchView(): void{
    this.listView = !this.listView;
  }
  public isListView(): boolean{
    return this.listView;
  }
  public getCategoryProducts(id: number): object {
    let products = [
      {categoryId: 1, id: 1, name: "cat1prod1"}, 
      {categoryId: 1, id: 2, name: "cat1prod2"}, 
      {categoryId: 1, id: 3, name: "cat1prod3"}, 
      {categoryId: 1, id: 4, name: "cat1prod4"}, 
      {categoryId: 1, id: 5, name: "cat1prod5"}, 
      {categoryId: 1, id: 6, name: "cat1prod6"}, 
      {categoryId: 1, id: 7, name: "cat1prod7"}, 
      {categoryId: 2, id: 1, name: "cat2prod1"}, 
      {categoryId: 2, id: 2, name: "cat2prod2"}, 
      {categoryId: 2, id: 3, name: "cat2prod3"}, 
      {categoryId: 2, id: 4, name: "cat2prod4"}, 
      {categoryId: 2, id: 5, name: "cat2prod5"}, 
      {categoryId: 2, id: 6, name: "cat2prod6"}, 
      {categoryId: 2, id: 7, name: "cat2prod7"}, 
      {categoryId: 2, id: 8, name: "cat2prod8"}, 
      {categoryId: 3, id: 1, name: "cat3prod1"}, 
      {categoryId: 3, id: 2, name: "cat3prod2"}, 
      {categoryId: 3, id: 3, name: "cat3prod3"}, 
      {categoryId: 3, id: 4, name: "cat3prod4"}, 
      {categoryId: 3, id: 5, name: "cat3prod5"}, 
      {categoryId: 3, id: 6, name: "cat3prod6"}, 
      {categoryId: 3, id: 7, name: "cat3prod7"}, 
      {categoryId: 3, id: 8, name: "cat3prod8"}, 
      {categoryId: 4, id: 1, name: "cat4prod1"}, 
      {categoryId: 4, id: 2, name: "cat4prod2"}, 
      {categoryId: 4, id: 3, name: "cat4prod3"}, 
      {categoryId: 4, id: 4, name: "cat4prod4"}, 
      {categoryId: 4, id: 5, name: "cat4prod5"}, 
      {categoryId: 4, id: 6, name: "cat4prod6"}, 
      {categoryId: 4, id: 7, name: "cat4prod7"}, 
      {categoryId: 5, id: 1, name: "cat5prod1"}, 
      {categoryId: 5, id: 2, name: "cat5prod2"}, 
      {categoryId: 5, id: 3, name: "cat5prod3"}, 
      {categoryId: 5, id: 4, name: "cat5prod4"}, 
      {categoryId: 5, id: 5, name: "cat5prod5"}, 
      {categoryId: 5, id: 6, name: "cat5prod6"}, 
      {categoryId: 5, id: 7, name: "cat5prod7"}, 
      {categoryId: 6, id: 1, name: "cat6prod1"}, 
      {categoryId: 6, id: 2, name: "cat6prod2"}, 
      {categoryId: 6, id: 3, name: "cat6prod3"}, 
      {categoryId: 6, id: 4, name: "cat6prod4"}, 
      {categoryId: 6, id: 5, name: "cat6prod5"}, 
      {categoryId: 6, id: 6, name: "cat6prod6"}, 
      {categoryId: 6, id: 7, name: "cat6prod7"}, 
      {categoryId: 6, id: 8, name: "cat6prod8"}, 
      {categoryId: 7, id: 1, name: "cat7prod1"}, 
      {categoryId: 7, id: 2, name: "cat7prod2"}, 
      {categoryId: 7, id: 3, name: "cat7prod3"}, 
      {categoryId: 7, id: 4, name: "cat7prod4"}, 
      {categoryId: 7, id: 5, name: "cat7prod5"}, 
      {categoryId: 7, id: 6, name: 'cat7prod6'}, 
      {categoryId: 7, id: 7, name: "cat7prod7"}, 
      {categoryId: 7, id: 8, name: "cat7prod8"},
      {categoryId: 8, id: 1, name: "cat8prod1"}, 
      {categoryId: 8, id: 2, name: "cat8prod2"}, 
      {categoryId: 8, id: 3, name: "cat8prod3"}, 
      {categoryId: 8, id: 4, name: "cat8prod4"}, 
      {categoryId: 8, id: 5, name: "cat8prod5"}, 
      {categoryId: 8, id: 6, name: "cat8prod6"}, 
      {categoryId: 8, id: 7, name: "cat8prod7"}
    ];
    let categoryProducts: object[] = [];
    for (let i = 0; i< products.length; i++){
      if (products[i].categoryId === id){
        categoryProducts.push(products[i]);
      }
    }
    return categoryProducts;
  }
  public getategoryNameById(id: number): string{
    let categories = [
      { id: 1, name: "category1" },
      { id: 2, name: "category2" },
      { id: 3, name: "category3" },
      { id: 4, name: "category4" },
      { id: 5, name: "category5" },
      { id: 6, name: "category6" },
      { id: 7, name: "category7" },
      { id: 8, name: "category8" }
      ];
      let requestedCategory = categories.filter(function(category){
        return category.id === id;
      });
      return requestedCategory[0].name;
  }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.categoryId = +params['id'];
       this.categoryName = this.getategoryNameById(this.categoryId);
       this.products = this.getCategoryProducts(this.categoryId);
    });
  }

  public ngOnDestroy() :void {
    this.sub.unsubscribe();
  }
};