import { Comment, Product } from './../classes/product.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * 商品列表
   */
  private productList: Product[] = [
    new Product(1, '第一個', 100, '這是第一個商品', ['飲品', '電子', '生鮮'], 4.5),
    new Product(2, '第二個', 100, '這是第二個商品', ['飲品', '電子', '生鮮'], 3.5),
    new Product(3, '第三個', 100, '這是第三個商品', ['飲品', '電子', '生鮮'], 4.5),
    new Product(4, '第四個', 100, '這是第四個商品', ['飲品', '電子', '生鮮'], 2.2),
    new Product(5, '第五個', 100, '這是第五個商品', ['飲品', '電子', '生鮮'], 3),
    new Product(6, '第六個', 100, '這是第六個商品', ['飲品', '電子', '生鮮'], 5),
  ]
  /**
   * 商品評論
   */
  private commentList: Comment[] = [
    new Comment(1, 1, 'king', 'goods', '2020/01/01',4),
    new Comment(2, 2, 'king', 'goods', '2020/01/01',3),
    new Comment(3, 4, 'king', 'goods', '2020/01/01',4),
    new Comment(4, 1, 'king', 'goods', '2020/01/01',5),
    new Comment(5, 2, 'king', 'goods', '2020/01/01',5),
    new Comment(6, 1, 'king', 'goods', '2020/01/01',2),
    new Comment(7, 1, 'king', 'goods', '2020/01/01',3),
  ]
  constructor() { }

  /**
   * 取得所有商品
   */
  getProductList() {
    return this.productList;
  }

  /**
   * 取得單個商品資訊
   */
  getProductById(id: number): Product {
    return this.productList.find(prod => prod.product_id === id)
  }

  /**
   * 取得商品評論
   */
  getProductComments(id: number):Comment[]{
    return this.commentList.filter(comment => comment.prod_id == id)
  }
}
