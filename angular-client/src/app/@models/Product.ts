export class Product {
  id: number;
  name: string;
  price: number;
  cost: number;
  rating: number;
  category_id: number;
  subCategory_id: number;
  group_id: number;
  description: string;

  /**
   *
   */
  constructor(id) {
    this.id = id;
  }
}
