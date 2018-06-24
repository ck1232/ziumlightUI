import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductListingStoreService } from '../../services/product-listing-store.service';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.css']
})
export class ProductPaginationComponent implements OnInit {
  @Input() numOfPages: Array<number> = [1, 2, 3, 4, 5];
  @Input() currentPageNum = 3;
  constructor(private fb: FormBuilder, private _productListingStoreService: ProductListingStoreService) { }

  ngOnInit() {
  }
  
  onPageSelected(pageNumSelected: number) {
      this._productListingStoreService.changePagination(pageNumSelected);
  }

}
