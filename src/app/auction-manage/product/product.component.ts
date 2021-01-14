import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/classes/product.class';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  /**
   * 商品列表
   */
  productList: Product[];
  /**
   * 標題搜索關鍵字
   */
  keyword: string;
  /**
   * 關鍵字搜索表單
   */
  titleSearch: FormControl = new FormControl();

  searchForm:FormGroup = new FormGroup({
    emails: new FormArray([
      new FormControl('aaa'),
      new FormControl('bbb'),
      new FormControl('vvv'),
      new FormControl('ddd'),
    ])
  })
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const a = (this.searchForm.get('emails') as FormArray).controls
    console.log(a)
    this.productList = this.productService.getProductList();
    this.titleSearch
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(title => {
        this.keyword = title
      })
  }


}
