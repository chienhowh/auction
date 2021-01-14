
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment, Product } from 'src/app/shared/classes/product.class';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {
  /**
   * 商品id
   */
  prodId: number;
  /**
   * 商品詳細資訊
   */
  product: Product;
  /**
   * 商品評論
   */
  commentList: Comment[];
  // 新評論
  newRating = 5;
  newComment = '';
  /**
   * 顯示評論區塊
   */
  isCommentShow = false;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.prodId = +this.routeInfo.snapshot.params['id']
    this.product = this.productService.getProductById(this.prodId)
    this.commentList = this.productService.getProductComments(this.prodId)
    this.product.product_rating = this.commentList.reduce((sum, comment) => sum + comment.rating, 0) / this.commentList.length;
  }

  /**
   * 提交新評論
   */
  submitComment() {
    this.commentList.unshift(new Comment(1, this.prodId, "guest", this.newComment, new Date().toISOString(), this.newRating))

    // 計算平均分數
    this.product.product_rating = this.commentList.reduce((sum, comment) => sum + comment.rating, 0) / this.commentList.length;

    // 重置評論區
    this.newComment = '';
    this.newRating = 5;
    this.isCommentShow = false
  }



}
