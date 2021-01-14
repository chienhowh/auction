import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  /**
    * 是否正在評論
    */
  @Input() isCommenting = false;
  /**
   * 評分
   */
  @Input() rating: number;
  // 同步更改送出評分
  @Output() ratingChange:EventEmitter<number> = new EventEmitter();

  /**
   * 轉換成星級列表
   */
  stars: Array<boolean> = [];


  constructor(
    private library: FaIconLibrary
  ) {
    this.library.addIcons(fasStar, farStar)
  }

  ngOnInit(): void {
    /**
     * 計算星星
     */
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i <= this.rating)
    }
  }

  /**
   * 評分
   */
  onRating(star: number) {
    if(this.isCommenting){
      this.rating = star + 1;
      this.ngOnInit()
      this.ratingChange.emit(this.rating)
    }
  }

}
