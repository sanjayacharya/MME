import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../products/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChild('test') test: ElementRef;

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.performFilter(value) : this.products;
  }

  filterProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private _productService: ProductService) {
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filterProducts = this.products;
      },
      error => this.errorMessage = <any>error);

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message;
  }
}
