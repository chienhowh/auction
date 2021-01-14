export class Product {
  /**
   * 商品id
   */
  product_id: number;
  /**
   * 商品名稱
   */
  product_name: string;
  /**
   * 商品價格
   */
  product_price: number;
  /**
   * 商品描述
   */
  product_desc: string;
  /**
   * 商品類別
   */
  product_type: Array<string>;
  /**
   * 商品評價
   */
  product_rating: number;
  constructor(id: number, name: string, price: number, desc: string, type: Array<string>, rating: number) {
    this.product_id = id;
    this.product_name = name;
    this.product_price = price
    this.product_rating = rating
    this.product_type = type
    this.product_desc = desc
  }
}

export class Comment {
  constructor(
    public comment_id: number,
    public prod_id: number,
    public user: string,
    public comment: string,
    public date: string,
    public rating: number) {
  }
}
